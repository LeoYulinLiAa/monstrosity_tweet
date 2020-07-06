import { isValidString } from "../utils/valid-strings";
import validator from "validator";
import isLength = validator.isLength;
import isEmpty = validator.isEmpty;
import { ValidatorResponse } from "./interfaces";

interface TweetError {
  text?: string
}

export function validateTweetInput(data: any): ValidatorResponse<TweetError> {
  const errors: TweetError = {};

  data.text = isValidString(data.text) ? data.text : '';

  if (!isLength(data.text, { min: 5, max: 140 })) {
    errors.text = 'Tweet must be between 5 and 140 characters';
  }

  if (isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}
