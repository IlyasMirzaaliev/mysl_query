module.exports = (app) => {
  const user = require("../controller/controller.js");

  app.post("/users", user.create);
  app.get("/users", user.findAll);
  app.get("/users/:firstName", user.search);
  app.get("/search/:userID", user.showUserById);
  app.put("/users/:userID", user.update);
  app.delete("/users/:userID", user.delete);
};
