const {User} = require('./../models/user')

let authenticate = (req, res, next) => {//middleware function that we use on routes to make them private
    let token = req.header('x-auth') //gets the value
    User.findByToken(token).then((user) => { //model method
        if (!user) {
            return Promise.reject() //the next lines will not be executed => catch block
        }
        req.user = user
        req.token = token
        next(); // to continue and execute res.send(req.user)
    }).catch(e => {
        res.status(401).send() // code that says tha authentication is required
    })
}

module.exports = {authenticate}