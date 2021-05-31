const User = require("../model/model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: `CANNOT BE EMPTY` });
  }

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });
  User.create(user, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};

exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.send(data);
    }
  });
};

exports.delete = (req, res) => {
  User.deleteUser(req.params.userID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        console.log("NOT FOUND A USER");
        res.status(404);
      } else {
        console.log("CANNOT RETRIEVING A USER");
        res.status(500);
      }
    } else {
      res.send(data);
    }
  });
};


exports.search = (req, res) => {
  User.searchByName(req.params.firstName, (err, data) => {
    if (err) {
      res.status(404).send({ message: `USER NOT FOUND ${err}` });
    } else {
      res.send(data);
    }
  });
};
