let readlineSync = require('readline-sync');
let emad = readlineSync.question('Email address please: ');
let secret = readlineSync.question('Your code please: ', {
    hideEchoBack: true
});
let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost", user: "root", password: "pswd!@#$%^",
    database: "Credentials"
});
con.connect(function(err) {
    if (err) throw err; console.log("Database connected!");
    let sqlq = "INSERT INTO login (email, pswd) VALUES ('" + emad + "','" + secret +"')";
    con.query(sqlq, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record inserted");
    });
});
