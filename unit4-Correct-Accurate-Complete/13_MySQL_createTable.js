let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost", user: "root", password: "pswd!@#$%^",
    database: "Credentials"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    let sql = "CREATE TABLE login (email VARCHAR(255), pswd VARCHAR(255), PRIMARY KEY (email))";
    con.query(sql, function (err, result){
        if (err) throw err;
        console.log("Table created");
    });
});
