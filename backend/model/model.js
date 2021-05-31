const sql = require("../dbconf/dbconf.js");



//user registration


//Created user model
const User = function (user) {
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.email = user.email;
};

//Creating User in DB
User.create = (newUser, result) => {
  sql.query(`INSERT INTO myTable SET ?`, newUser, (err, res) => {
    if (err) {
      console.log("Ошибка создания ");
      result(err, null);
    } else {
      console.log("User Added");
      result(null, res);
    }
  });
};

module.exports = User;

//getting all users

User.getAll = (result) => {
  sql.query(`SELECT * FROM myTable`, (err, res) => {
    if (err) {
      console.log("Cannot get users from DB");
      result(null, err);
      return;
    }
    result(null, res);
  });
};

User.deleteUser = (userID, result) => {
  sql.query(`DELETE FROM myTable WHERE userID = ${userID}`, (err, res) => {
    if (err) {
      console.log("Cannot delete user: " + err + " Syntax error from FRONTEND");
      result(null, err);
      return;
    }
    if (res.rows === 0) {
      result({ kind: "not found" }, null);
      return;
    }
    console.log("USER DELETED: ", userID);
    result(null, res);
    return;
  });
};

User.searchByName = (firstName, result) => {
  sql.query(
    `SELECT * FROM myTable WHERE firstName LIKE '${firstName}'`,
    (err, res) => {
      if (err) {
        console.log(`CANNOT find`);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};


