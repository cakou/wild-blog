module.exports = {
    db: 'mongodb://localhost:27017/blog',
    facebookAuth: {
        clientID: "204672466291958", // your App ID
        clientSecret: "128b970e14d9624a0e3e7848ec21318d", // your App Secret
        callbackURL: "http://localhost:${process.env.PORT || '8080'}/api/auth/facebook/callback"
    }
}