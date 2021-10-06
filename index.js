const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileupload = require("express-fileupload");
const mongoose = require("mongoose");
require("dotenv").config();

const router = express();
router.use(cors());
router.use(fileupload());
router.use(bodyParser.json({ limit: "50mb", extended: true }));
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


var admin = require("firebase-admin");

var serviceAccount = require("./shah-book-shop-firebase-adminsdk-3mn9a-03ce564d50.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const bookRoutes = require("./routes/bookRoutes");

router.use("/api/user", userRoutes);
router.use("/api/admin", adminRoutes);
router.use("/api/books", bookRoutes);

router.get("/", (req, res) => {
  res.send("Server is up");
});

const port = process.env.PORT || 5240;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true
  })
  .then(() => router.listen(port, console.log(`Server running or ${port}`)))
  .catch((error) => console.log(error));

mongoose.Promise = global.Promise;
