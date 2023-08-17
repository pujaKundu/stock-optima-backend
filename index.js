const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 9000;

const authRoute = require("./routes/auth");
const productsRoute = require("./routes/product");
const suppliersRoute = require("./routes/supplier");
const customersRoute = require("./routes/customer");
const ordersRoute = require("./routes/order");
const purchasesRoute = require("./routes/purchase");
const categoriesRoute = require("./routes/category");

dotenv.config();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("hello node");
});

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.db_pass}@cluster0.spp4qmt.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to mongodb");
    app.listen(port, () => {
      console.log("Api running on port  ", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/auth", authRoute);
app.use("/", productsRoute);
app.use("/", suppliersRoute);
app.use("/", customersRoute);
app.use("/", ordersRoute);
app.use("/", purchasesRoute);
app.use("/", categoriesRoute);
