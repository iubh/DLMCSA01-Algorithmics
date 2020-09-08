con.connect(function(err) {
    emad.replace(/'/g,'_'); if (err) throw err;
    const sql1 = "SELECT * FROM login WHERE email=" + "'" + emad + "'";
    con.query(sql1, function (err, result) {
        if (err) throw err; console.log(result);
    });
});
