var admin = require("firebase-admin");

const requirePath = async (req, res, next) => {
  const token = req.headers.authorization;
  admin
    .auth()
    .verifyIdToken(token)
    .then(function (decodedToken) {
      const { email } = decodedToken;
      if (email) {
        next();
      } else {
        return res.status(400).json({ err: "Invalid Auth" });
      }
    })
    .catch(function (error) {
      return res.status(400).json({ err: error });
    });
};

module.exports = { requirePath };
