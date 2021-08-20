const express = require("express");
const config = require("./config/index.js");
require("./db");

const productsRoutes = require("./services/products");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/products", productsRoutes);

app.listen(config.port, "0.0.0.0", () => {
  console.log(`API run at http://localhost:${config.port}`);
});
