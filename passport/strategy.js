const JWTStrategy = require("passport-jwt").Strategy;

const ExtractJWT = require("passport-jwt").ExtractJwt;

const passport = require("passport");

const User = require("../models/register.model")

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secret"
};
module.exports = async function(){
passport.use(new JWTStrategy(options, function(jwt_payload, done) {
   
    User.findById(jwt_payload.user, function(err, user) {
        passport.serializeUser((user, done) => {
            done(null, user.id);
           });
        if (err) {
            return done(err, false);
        }
        if (user) {
           
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));
    
    
        
   
}