import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/QAdeptrai", (req, res0) => {
    return res0.send("Hello world width QAdeptrai")
  });

  return app.use("/", router);
};

module.exports = initWebRoutes;
