const express = require("express");
const cors = require("cors");
const config = require("./config/index.js");

require("./db");

const productsRoutes = require("./services/products");
const trasanctionsRoutes = require("./services/transactions/index");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/products", productsRoutes);
app.use("/transactions", trasanctionsRoutes);

app.listen(config.port, "0.0.0.0", () => {
  console.log(`API run at http://localhost:${config.port}`);
});
