const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "login");

var {
    adminFb,
    firebase
} = require('../config/firebaseconfig.js');


var exports = module.exports = {};

exports.user = function (req, res, err) {
    const sessionCookie = req.cookies.session || '';
    // Verify the session cookie. In this case an additional check is added to detect
    // if the user's Firebase session was revoked, user deleted/disabled, etc.
    adminFb.auth().verifySessionCookie(sessionCookie, true /** checkRevoked */ ).then((decodedClaims) => {
        adminFb.auth().getUser(decodedClaims.uid).then(user => {
            adminFb.database().ref('/users/' + decodedClaims.uid).once('value').then(snapshot => {
                var userInfo = snapshot.val();
                let info = [];
                let role;
                var {
                    uid,
                    email
                } = user;
                firebase.companies.getById(userInfo.hubspot_id).then(body => {
                    info = {
                        uid: uid,
                        email: email,
                    };
                    res.status(200).send({
                        user: info,
                        token: sessionCookie
                    });
                }).catch(error => {
                    console.log(error);
                    res.status(500).send({
                        error: error
                    })
                })
            }).catch(error => {
                console.log(error);
                res.status(500).send({
                    error: error
                });
            })
        }).catch(error => {
            console.log(error);
            res.status(500).send({
                error: error
            })
        })
    }).catch(() => {
        // Session cookie is unavailable or invalid. Force user to login.
        res.redirect('/denied');
    });
}


exports.login = function (req, res, err) {
    var email = req.body.email;
    var password = req.body.password;
    firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
        if (!user.user.emailVerified) {
            res.status(400).send({
                error: "Por favor, verifique o seu email primeiro!"
            });
            res.end();
        } else {
            return user.user.getIdToken().then(idToken => {
                const expiresIn = 60 * 60 * 24 * 5 * 1000;
                adminFb.auth().createSessionCookie(idToken, {
                    expiresIn
                }).then((sessionCookie) => {
                    // Set cookie policy for session cookie.
                    const options = {
                        expires: new Date(Date.now() + 60 * 60 * 24 * 5 * 1000),
                        httpOnly: false,
                        secure: false
                    };
                    res.cookie('session', sessionCookie, options);
                    adminFb.auth().verifySessionCookie(sessionCookie).then(decodedClaims => {
                        res.send({
                            status: 'success'
                        })
                    })
                }, error => {
                    console.log(error);
                    res.redirect('/denied');
                });
            });
        }
    }).then(() => {
        // A page redirect would suffice as the persistence is set to NONE.
        return firebase.auth().signOut();
    }).catch(error => {
        console.log(error);
        res.status(500).send(error)
    })
}


exports.logout = function (req, res, err) {
    const sessionCookie = req.cookies.session || '';
    // Verify the session cookie. In this case an additional check is added to detect
    // if the user's Firebase session was revoked, user deleted/disabled, etc.
    adminFb.auth().verifySessionCookie(sessionCookie).then((decodedClaims) => {
        adminFb.auth().getUser(decodedClaims.uid).then(user => {
            adminFb.database().ref('/users/' + decodedClaims.uid).once('value').then(snapshot => {
                var userInfo = snapshot.val();
                if (userInfo.notiToken) {
                    adminFb.database().ref('/users/' + decodedClaims.uid).set({
                        name: userInfo.name,
                        email: userInfo.email
                    });
                }
            })
        })
        res.clearCookie('session');
        return adminFb.auth().revokeRefreshTokens(decodedClaims.sub);
    }).then(() => {
        res.status(200).send({
            data: 'Logout Successfully'
        });
    }).catch(error => {
        res.redirect('/denied');
    })
}

exports.register = function (req, res, err) {
    var name = req.body.name
    var username = req.body.username
    var morada = req.body.morada
    var codigopostal = req.body.codigopostal
    var localidade = req.body.localidade
    var pais = req.body.pais
    var telefone = req.body.telefone
    var nif = req.body.nif
    var email = req.body.email
    var password = req.body.password

    adminFb.auth().createUser({
        email: email,
        password: password,
    }).then(function (result) {
        adminFb.auth().createCustomToken(result.uid).then(token => {
            firebase.auth().signInWithCustomToken(token).then(result => {
                return result.user.sendEmailVerification();
            }).catch(error => {
                console.log(error);
                res.status(500).send({
                    error: error
                })
            })
        }).then(() => {
            var params = {
                properties: [{
                        name: 'name',
                        value: name
                    },
                    {
                        name: 'username',
                        value: username
                    },
                    {
                        name: 'morada',
                        value: morada
                    },
                    {
                        name: 'codigopostal',
                        value: codigopostal
                    },
                    {
                        name: 'localidade',
                        value: localidade
                    },
                    {
                        name: 'pais',
                        value: pais
                    },
                    {
                        name: 'telefone',
                        value: telefone
                    },
                    {
                        name: 'nif',
                        value: nif
                    },
                    {
                        name: 'email',
                        value: email
                    }
                ]
            }
            adminFb.database().ref('/users/' + result.uid).set({
                email: email,
                name: name,
                username: username,
                morada: morada,
                codigopostal: codigopostal,
                localidade: localidade,
                pais: pais,
                telefone: telefone,
                nif: nif,
                newUser: 1
            }).then(() => {
                adminFb.auth().setCustomUserClaims(result.uid, {})
                res.status(200).send({
                    data: "Pessoa " + name + " foi registada com o email: " + email + "e os seguintes dados:" + "/n Username: " + username + "/n Morada: " + morada + "/n CodigoPostal: " + codigopostal + "/n Localidade: " + localidade + "/n Pais: " + pais + "/n Telefone: " + telefone + "/n Nif: " + nif
                });
            }).catch(error => {
                console.log(error)
                res.status(500).send({
                    error: error
                })
            })
        }).catch(error => {
            console.log(error)
            res.status(500).send({
                error: error
            })
        })
    }).catch(error => {
        console.log(error)
        res.status(500).send({
            error: error
        })
    })
}


exports.requestEmailVerification = function (req, res, err) {
    var email = req.sanitize('email').escape();
    adminFb.auth().getUserByEmail(email).then(user => {
        adminFb.auth().createCustomToken(user.uid).then(token => {
            firebase.auth().signInWithCustomToken(token).then(result => {
                result.user.sendEmailVerification().catch(error => {
                    console.log(error);
                    res.status(500).send({
                        error: error
                    });
                    res.end();
                })
            }).catch(error => {
                console.log(error);
                res.status(500).send({
                    error: error
                });
                res.end();
            })
        }).catch(error => {
            console.log(error);
            res.status(500).send({
                error: error
            });
            res.end();
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            error: error
        });
        res.end();
    })
}

exports.saveNotiToken = function (req, res, err) {
    const sessionCookie = req.cookies.session || '';
    const notiToken = req.body.notiToken;
    adminFb.auth().verifySessionCookie(sessionCookie, true /** checkRevoked */ ).then((decodedClaims) => {
        adminFb.database().ref('/users/' + decodedClaims.uid).once('value').then(snapshot => {
            var userInfo = snapshot.val();
            adminFb.database().ref('/users/' + decodedClaims.uid).set({
                email: userInfo.email,
                notiToken: notiToken,
            }).then(() => {
                res.status(200).send("Token de notificação salva");
            })
        })
    })

}

exports.recoverPassword = function (req, res, err) {
    var email = req.body.email;
    firebase.auth().sendPasswordResetEmail(email).then(() => {
        // Email sent.
        res.status(200).send({ msg: "Email para recuperar a password enviado com sucesso!" });
        res.end();
    }).catch(error => {
        console.log(error);
        res.status(500).send({ error: error });
        res.end();
    });
}