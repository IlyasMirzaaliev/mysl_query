// const sql = require("../dbconf/dbconf.js");

//user registration

// //Created user model
// const User = function (user) {
//   this.firstName = user.firstName;
//   this.lastName = user.lastName;
//   this.email = user.email;
//   this.mobTel = user.mobTel;
// };

// User.updateUser = (userID, user, result) => {
//     sql.query(
//       `UPDATE myTable SET firstName = ?, lastName = ?, email = ?, mobTel = ? WHERE userID = ?`,
//       [user.firstName, user.lastName, user.email, user.mobTel, userID],
//       (err, res) => {
//         if (err) {
//           console.log(err);
//           result(err, null);
//           return;
//         }
//         if (res.affectedRows == 0 || res.user.mobTel !== "992") {
//           result({ kind: "USER_NOT_FOUND or WRONG_FORMAT" }, null);
//           result(null, { userID: userID, ...user });
//         } else {
//           console.log("user updated");
//           result(null, res);
//         }
//       }
//     );
//   };
