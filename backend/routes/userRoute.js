const router = require("express").Router();
const authController = require("../controllers/authController");

router.route("/signup").post(authController.signUp);
router.route("/login").post(authController.logIn);
router.route("/forgotpassword").post(authController.forgotPassword);

//router level middleware which runs on every request after this middleware line
router.use(authController.protectMiddleware);
router.route("/").get(authController.get);

module.exports = router;
