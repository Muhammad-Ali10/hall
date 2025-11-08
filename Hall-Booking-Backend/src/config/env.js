export default {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI,
  clientUrl: process.env.CLIENT_URL,
  nodeEnv: process.env.NODE_ENV || "development",
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  accessExpiry: process.env.ACCESS_TOKEN_EXPIRY || "15m",
  refreshExpiry: process.env.REFRESH_TOKEN_EXPIRY || "7d",
  razorpayKeyId: process.env.RAZORPAY_KEY_ID,
  razorpaySecret: process.env.RAZORPAY_SECRET,
  cloudinary: {
    name: process.env.CLOUDINARY_CLOUD_NAME,
    key: process.env.CLOUDINARY_API_KEY,
    secret: process.env.CLOUDINARY_API_SECRET
  }
};
