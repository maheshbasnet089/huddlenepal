const express = require("express");
const router = express.Router();
const navController = require("./../controllers/navController");

router
    .route("/how-we-work")
    .get(navController.how_we_work);
    
router
    .route("/event-listening")
    .get(navController.event_listening);

router
    .route("/contact")
    .get(navController.contact);

module.exports = router;
