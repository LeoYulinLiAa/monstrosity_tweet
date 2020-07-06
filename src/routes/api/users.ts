import { Router } from "express";
import { User, UserDocument } from "../../models/User";
import BCrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import { getJWTSecret } from "../../config/config";
import { validateUserLogin, validateUserRegister } from "../../validators/user_validators";

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
  res.json({ hi: "req" });
});

userRoutes.post("/register", async (req, res) => {
  const { handle, email, password } = req.body;

  const { errors, isValid } = validateUserRegister(req.body);
  if (!isValid) return res.status(400).json(errors);

  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json("Email has already been taken");
  } else {
    const newUser = new User({ handle, email, password } as UserDocument);
    const salt = await BCrypt.genSalt(10);
    newUser.password = await BCrypt.hash(newUser.password, salt);
    res.json(await newUser.save());
  }
});

userRoutes.post("/login", async (req, res) => {

  const { errors, isValid } = validateUserLogin(req.body);
  if (!isValid) return res.status(400).json(errors);

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await BCrypt.compare(password, user.password)) {
    const payload = {
      id: user.id,
      handle: user.handle,
      email: user.email
    };
    const token = `Bearer ${ await JWT.sign(payload, getJWTSecret(), { expiresIn: 3600 }) }`;
    res.json({ success: true, token });
  } else {
    res.status(401).json({ msg: "Invalid username or password" });
  }

});

export default userRoutes;
