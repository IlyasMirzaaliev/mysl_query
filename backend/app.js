const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./router/router.js")(app);

const startServer = () => {
  app.listen(3000, () => {
    try {
      console.log("Server Started");
    } catch (err) {
      console.log(err);
    }
  });
};

startServer();
