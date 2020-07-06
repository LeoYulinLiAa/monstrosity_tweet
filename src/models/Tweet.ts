import { Document, model, Schema, Types } from "mongoose";
import { UserDocument } from "./User";
import ObjectId = Types.ObjectId

export interface ITweet {
  user: ObjectId
  text: string
  date: Date
}

const TweetSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export const Tweet = model<ITweet & Document>('Tweet', TweetSchema);
