import validator from "validator";
import isEmail = validator.isEmail;
import { isValidString } from "../utils/valid-strings";
import isEmpty = validator.isEmpty;
import isLength = validator.isLength;
import { ValidatorResponse } from "./interfaces";

interface LoginError {
  email?: string
  password?: string
}

interface RegisterError {
  handle?: string
  email?: string
  password?: string
}

export function validateUserRegister(body: { handle: string, email: string, password: string }): ValidatorResponse<RegisterError> {

  const handle = isValidString(body.handle) ? body.handle : "";
  const email = isValidString(body.email) ? body.email : "";
  const password = isValidString(body.password) ? body.password : "";

  const errors: RegisterError = {};

  if (isEmpty(handle)) {
    errors.handle = "Handle is required";
  }

  if (!isLength(handle, { min: 2, max: 30 })) {
    errors.handle = "Handle must have length between 2 and 30";
  }

  if (!isEmail(email)) {
    errors.email = "Email is invalid";
  }

  if (isEmpty(email)) {
    errors.email = "Email field is required";
  }

  if (isEmpty(password)) {
    errors.password = "Password field is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };

}

export function validateUserLogin(body: { email: string, password: string }): ValidatorResponse<LoginError> {
  const email = isValidString(body.email) ? body.email : "";
  const password = isValidString(body.password) ? body.password : "";

  const errors: LoginError = {};

  if (!isEmail(email)) {
    errors.email = "Email is invalid";
  }

  if (isEmpty(email)) {
    errors.email = "Email field is required";
  }

  if (isEmpty(password)) {
    errors.password = "Password field is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };

}
