var admin = require("firebase-admin");
const Admin = require("../../models/admin");
const Order = require("../../models/order");

const getUserbyToken = async (req, res) => {
  const token = req.headers.authorization;
  try {
    admin
      .auth()
      .verifyIdToken(token)
      .then(function (decodedToken) {
        const { name, email, image: picture, user_id } = decodedToken;
        const emailData = Admin({ email: email });
        if (emailData) {
          res
            .status(201)
            .json({ name, email, image: picture, user_id, role: "admin" });
        } else {
          res
            .status(201)
            .json({ name, email, image: picture, user_id, role: "user" });
        }
      })
      .catch(function (error) {
        res.status(401).send("Un Authorized Access");
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

const postOrder = async (req, res) => {
  try {
    await Order.insertMany(req.body);
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOrder = async (req, res) => {
  const id = req.params.id;
  try {
    const orderData = await Order.find({ user_id: id });
    res.status(201).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getUserbyToken,
  postOrder,
  getOrder,
};
