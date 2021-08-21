var express = require("express");

const router = express.Router();

var controller = require("../controller/users/index");
var product = require("../controller/product/index");



let routes = (app) => {
 
  router.post("/register",controller.registration);
  router.post("/login",controller.login);
  router.get("/getuser",controller.getUsers);
  router.get("/getUserDetails",controller.getdetails);

  router.post("/product",product.product);
  router.post("/Customer",product.viewProduct);
  router.get("/viewProduct",product.viewpro);





  app.use("/api", router);
};

module.exports = routes