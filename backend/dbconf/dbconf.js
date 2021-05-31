const mysql = require("mysql");

const dbConn = mysql.createConnection({
    host: "10.154.66.5",
    user: "root",
    password: "password",
    database: "dbv_2",
});

dbConn.connect((error) => {
    if (error) {
        return console.error("Error");
    } else {
        console.log("Connected to DB");
    }
});


module.exports = dbConn