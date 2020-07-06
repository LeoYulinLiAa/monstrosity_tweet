import { Request, Router } from "express";
import { Tweet } from "../../models/Tweet";
import passport from "../../config/passport";
import { validateTweetInput } from "../../validators/tweet_validators";
import { UserDocument } from "../../models/User";

const tweetRouter = Router();

tweetRouter.get("/", async (req, res) => {
  try {
    const tweets = await Tweet.find().sort({ date: -1 });
    res.json(tweets);
  } catch (e) {
    res.status(404).json({ msg: "No tweet found" });
  }
});

tweetRouter.get("/users/:user_id", async (req, res) => {
  try {
    const tweets = await Tweet.find({ user: req.params.user_id });
    res.json(tweets);
  } catch (e) {
    res.status(404).json({ msg: "No tweet found" });
  }

});

tweetRouter.get("/:id", async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    res.json(tweet);
  } catch (e) {
    res.status(404).json({ msg: "No tweet found" });
  }
});

tweetRouter.post('/',
  passport.authenticate('jwt', { session: false }),
  async (req: Request, res) => {
    const { errors, isValid } = validateTweetInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newTweet = new Tweet({
      text: req.body.text,
      user: (req.user as UserDocument).id
    });

    res.json(await newTweet.save());
  }
);

export default tweetRouter;
