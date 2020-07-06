import { model, Schema, Document } from "mongoose";

export type UserDocument = Document & {
  handle: string,
  email: string,
  password: string
};

const UserSchema = new Schema({
  handle: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
}, { timestamps: true });

export const User = model<UserDocument>('User', UserSchema);
