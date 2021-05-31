module.exports = (app) => {
  const user = require("../controller/controller.js");

  app.post("/users", user.create);
  app.get("/users", user.findAll);
  app.get("/users/:firstName", user.search);
  // app.get("/users/:lastName", user.search);

  app.delete("/users/:userID", user.delete);
};
