
export function getJWTSecret(): string {
  const jwtSecret = process.env.JWT_SECRET;
  if (jwtSecret) {
    return jwtSecret;
  } else {
    throw "No JWT Config found";
  }
}

export function getMongoUrl(): string {
  const mongoUri = process.env.MONGO_URL;
  if (mongoUri) {
    return mongoUri;
  } else {
    throw "No Mongo Config found";
  }
}
