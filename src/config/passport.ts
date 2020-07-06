import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";

import { getJWTSecret } from "./config";
import passport from "passport";
import { User } from "../models/User";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: getJWTSecret()
};

passport.use(new JwtStrategy(options, (jwt_payload, done) => {
  const user = User.findById(jwt_payload.id);
  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
}));

export default passport;
