let readlineSync = require('readline-sync');
let emad = readlineSync.question('Email address please: ');
let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost", user: "root", password: "pswd!@#$%^",
    database: "Credentials"
});
con.connect(function(err) {
    if (err) throw err;
    const sql1 = `SELECT * FROM login WHERE email = ${emad}`;
    con.query(sql1, function (err, result) {
        if (err) {
            const sql2 = `SELECT * FROM login WHERE email = "${emad}"`;
            con.query(sql2, function (err, result) {
                if (err) throw err; console.log(result);
            });
        }
        else {console.log(result);}
    });
});
