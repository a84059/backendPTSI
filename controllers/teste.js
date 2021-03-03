exports.loginwithsession = function (req, res, err) {
    var email = req.body.email;
    var password = req.body.password;
    firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
        if (!user.email.emailVerified) {
            res.status(400).send({ error: "Por favor, verifique o seu email primeiro!" });
            res.end();
        }
        else {
            return user.user.getIdToken().then(idToken => {
                const expiresIn = 60 * 60 * 24 * 5 * 1000;
                adminFb.auth().createSessionCookie(idToken, { expiresIn }).then((sessionCookie) => {
                    // Set cookie policy for session cookie.
                    const options = { expires: new Date(Date.now() + 60 * 60 * 24 * 5 * 1000), httpOnly: false, secure: false };
                    res.cookie('session', sessionCookie, options);
                    adminFb.auth().verifySessionCookie(sessionCookie).then(decodedClaims => {
                        res.send({status: 'success'})
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