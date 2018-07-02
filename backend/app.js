var mysql = require('mysql'); //metoa in node js prin care imi aduc libraria de mysql in node
const express = require('express')
const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var con = mysql.createConnection({
  host: "localhost",
  user: "xxx",
  password: "xxx",
  port: 3306,
  database: "smrtshop_test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});




app.get('/retete', (req, res) => {
    var sql = "select * from pravalia_retete order by id desc";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result)
    })
})

app.get('/comentarii', (req, res) => {
    var sql = "select * from mesaje order by id desc";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result)
    })
})






app.post('/incrementeaza_views', (req, res) => {

let idd = req.body.id;
//     var viewss= req.body.views
//    // console.log("idd este ", id)

    var sql = `UPDATE pravalia_retete SET views = views+1 WHERE id="${idd}"  `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result)
    })
})








// app.get('/incrementeaza_views', (req, res) => {
//     var id = req.body.id;
//     var viewss= req.body.views
//    // console.log("idd este ", id)
//    viewss++
    


//     var orderSQL = "UPDATE pravalia_retete SET views = views+1 WHERE id='"+id+"'   ";

//     con.query(orderSQL, (err, result) => {
//         if (err) throw err;

    
// res.send({success: true, id: id});
    
// });



// //    res.send({success: true, ide: id, views: views});
// //res.send(orderSQL);
    
// });






app.post('/trimite_mesaj', (req, res) => {
    let nume = req.body.nume;
    let mesaj = req.body.mesaj;
    let id_intrebare = req.body.id;

   

    let orderSQL = `INSERT INTO mesaje (articol_id, nume, mesaj) VALUES ('${id_intrebare}', '${nume}', '${mesaj}')`;

    con.query(orderSQL, (err, result) => {
        if (err) throw err;

    
res.send({success: true});
    
});


});
































app.get('/vizualizari', (req, res) => {
    var sql = "select * from pravalia_retete order by views desc limit 6";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result)
    })
})
















app.get('/', (req, res) => {
    res.send('Hello ddd!')
});



app.get('/pravalia/test', (req, res) => {
    res.send('Salut, Acum esti in test!')
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

