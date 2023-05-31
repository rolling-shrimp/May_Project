const express =require('express');
const bodyParser =require('body-parser');
var cors = require('cors')
const app=express()
app.listen(9000);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

var mysql = require("mysql");
var conn = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    port: 8889,
    database: "tododb"
});

conn.connect(function (err) {
  console.log(err);
})

app.get("/shopcar/list", function (req, res) {
    conn.query("select * from shopping_cart", [],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
  })
  
  