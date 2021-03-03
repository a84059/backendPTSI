const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "login");

var {
    adminFb,
    firebase
} = require('../config/firebaseConfig.js');


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

        res.send({
            status: 'success'
        })

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
                        hubspot_id: userInfo.hubspot_id,
                        email: userInfo.email,
                        newUser: userInfo.newUser
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
    var name = req.sanitize('name').escape();
    var email = req.sanitize('email').escape();
    var phone = req.sanitize('phone').escape();
    var city = req.sanitize('city').escape();
    var country = req.sanitize('country').escape();
    var sector = req.sanitize('sector').escape();
    var responsible = req.sanitize('responsible').escape();
    var nif = req.sanitize('nif').escape();
    var password = req.sanitize('password').escape();
    let type = req.sanitize('type').escape();

    if (type == "camara" || type == "empresa") {
        adminFb.auth().createUser({
            email: email,
            password: password,
            phoneNumber: phone,
            displayName: name,
            photoURL: 'https://firebasestorage.googleapis.com/v0/b/isienviron.appspot.com/o/images%2Fimageedit_2_2406096994.png?alt=media&token=3d71278f-5123-4413-b8a3-aa4a2b91615a&fbclid=IwAR1O1h53ZO5Ick1vbx6BSuJe1d4AX6FttyZ6r4IH889UYLZaxMo0qV1-OM8'
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
                            name: 'email',
                            value: email
                        },
                        {
                            name: 'phone',
                            value: phone
                        },
                        {
                            name: 'city',
                            value: city
                        },
                        {
                            name: 'country',
                            value: country
                        },
                        {
                            name: 'industry',
                            value: sector
                        },
                        {
                            name: 'nif',
                            value: nif
                        },
                        {
                            name: 'responsible',
                            value: responsible
                        }
                    ]
                }
                hubspot.companies.create(params).then((body) => {
                    adminFb.database().ref('/users/' + result.uid).set({
                        hubspot_id: body.companyId,
                        email: email,
                        newUser: 1
                    }).then(() => {
                        if (type == "empresa") {
                            adminFb.auth().setCustomUserClaims(result.uid, {
                                empresa: true
                            }).then(() => {
                                adminFb.auth().getUserByEmail(email).then(user => {
                                    adminFb.auth().listUsers().then(userRecords => {
                                        userRecords.users.forEach(userRecord => {
                                            if (userRecord.customClaims.admin) {
                                                var msg = 'A empresa ' + name + ' juntou-se à Environ. :)';
                                                sendNotifications.sendNoti(msg, user, userRecord.email, "user");
                                            }
                                        })
                                    })
                                })
                                res.status(200).send({
                                    data: "Empresa " + name + " foi registada com o ID: " + body.companyId
                                });
                            }).catch(error => {
                                console.log(error)
                                res.status(500).send({
                                    error: error
                                })
                            })
                        } else if (type == "camara") {
                            adminFb.auth().setCustomUserClaims(result.uid, {
                                camara: true
                            }).then(() => {
                                adminFb.auth().getUserByEmail(email).then(user => {
                                    adminFb.auth().listUsers().then(userRecords => {
                                        userRecords.users.forEach(userRecord => {
                                            if (userRecord.customClaims.admin) {
                                                var msg = 'A ' + name + ' juntou-se à Environ. :)';
                                                sendNotifications.sendNoti(msg, user, userRecord.email, "user");
                                            }
                                        })
                                    })
                                })
                                res.status(200).send({
                                    data: "Camara " + name + " foi registada com o ID: " + body.companyId
                                });
                            }).catch(error => {
                                console.log(error)
                                res.status(500).send({
                                    error: error
                                })
                            })
                        }
                    }).catch(error => {
                        console.log(error)
                        res.status(500).send({
                            error: error
                        })
                    })
                })
            }).catch(error => {
                console.log(error)
                res.status(500).send({
                    error: error
                })
            })
        }).catch(function (error) {
            console.log(error)
            res.status(500).send({
                error: error
            })
        })
    } else {
        res.status(400).send({
            error: "Insira o tipo camara ou empresa"
        })
    }
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
    const notiToken = req.sanitize('notiToken').escape();
    adminFb.auth().verifySessionCookie(sessionCookie, true /** checkRevoked */ ).then((decodedClaims) => {
        adminFb.database().ref('/users/' + decodedClaims.uid).once('value').then(snapshot => {
            var userInfo = snapshot.val();
            adminFb.database().ref('/users/' + decodedClaims.uid).set({
                hubspot_id: userInfo.hubspot_id,
                email: userInfo.email,
                notiToken: notiToken,
                newUser: userInfo.newUser
            }).then(() => {
                res.status(200).send("Token de notificação salva");
            })
        })
    })

}