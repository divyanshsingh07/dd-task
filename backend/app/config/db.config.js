const DEFAULT_URL = "mongodb://localhost:27017/dd_db";

module.exports = {
  url: process.env.MONGO_URL || DEFAULT_URL
};
