const jwt = require('jsonwebtoken')
require('dotenv').config()
const jwt_secret = process.env.jwt_secret

//fetch user using loggined token - (credentials)
const fetchUser = (req, res, next) => {
    //get auth token 
    const token = req.header('auth-token');

    if(!token){ 
        //token is not present
        res.status(401).send({error:'Please authenticate with valid token'});
    }
    try {
        //varify the token
        const data = jwt.verify(token, jwt_secret);
        req.user = data.user;
        next()
    } catch (error) {
        res.status(401).send({error:'Please authenticate with valid token'});
        
    }

}

module.exports = fetchUser