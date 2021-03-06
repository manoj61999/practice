var express = require("express");

const router = express.Router();

var controller = require("../controller/users/index");
var product = require("../controller/product/index");
var order = require("../controller/order/index")
var calculator = require("../controller/calculator/index");



let routes = (app) => {
 
  router.post("/register",controller.registration);
  router.post("/login",controller.login);
  router.get("/getuser",controller.getUsers);
  router.get("/getUserDetails",controller.getdetails);

  router.post("/product",product.product);
  router.post("/Customer",product.viewProduct);
  router.get("/viewProduct",product.viewpro);

  router.post("/Order",order.Order);
  router.post("/OrderDetails",order.OrderDetails);
  router.get("/OrderReview",order.OrderReview);

  router.post("/Addition",calculator.Addition);
  router.post("/subraction",calculator.Subraction);
  router.post("/Multi",calculator.Multiplication);
  router.post("/Division",calculator.Division);

  app.use("/api", router);
};

module.exports = routes