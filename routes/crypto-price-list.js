const express = require("express");
const router = express.Router();
const { fetchCryptoPriceList } = require("../controllers/crypto-price-list");

router.get("/", fetchCryptoPriceList);

module.exports = router;