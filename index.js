const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8000 || process.env.PORT;

// Importing routes
const cryptoPriceListRoute = require("./routes/crypto-price-list");

app.use(cors());
app.use(bodyParser.json());
app.use(cryptoPriceListRoute);

app.listen(PORT, () => console.log(`app is live at port ${PORT}`));