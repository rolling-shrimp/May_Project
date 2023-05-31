const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");
var cors = require("cors");
const app = express();
app.listen(9000);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

var mysql = require("mysql");
var conn = mysql.createConnection({
  user: "root",
  password: "root",
  host: "localhost",
  port: 8889,
  database: "table_name",
});

conn.connect(function (err) {
  console.log(err);
});

// app.put("/todo/item", function (req, res) {
//   conn.query("update todoTable set title= ?, isComplete = ? where todoTableId = ?",
//       [req.body.title, req.body.isComplete, req.body.todoTableId],
//       function (err, rows) {
//           res.send( JSON.stringify( req.body ));
//       }
//   )

// })

// app.delete("/todo/delete/:id", function (req, res) {
//   conn.query("delete from todoTable where todoTableId = ?",
//       [req.params.id],
//       function (err, rows) {
//           res.send("#" + req.params.id + " deleted");
//       }
//   )
// })

// app.get("/teaching/list", function (req, res) {
//   conn.query("select * from table_name", [],
//       function (err, rows) {
//           res.send( JSON.stringify(rows) );
//       }
//   )
// })

app.get("/teaching/list", function (req, res) {
  conn.query(
    `
      SELECT 
        id, 
        name, 
        content, 
        DATE_FORMAT(time, '%Y-%m-%d %H:%i:%s') AS time 
      FROM 
        something`,
    [],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

// app.get("/teaching", function (req, res) {
//   conn.query("select * from table_name where id = ?",
//       [req.params.id],
//       function (err, rows) {
//           res.send( JSON.stringify(rows[0]) );
//       }
//   )
// })
// app.get("/teaching/:id", function (req, res) {
//   conn.query(`
//       SELECT
//         id,
//         name,
//         content,
//         DATE_FORMAT(STR_TO_DATE(time, '%Y-%m-%d %H:%i:%s'), '%Y-%m-%d %H:%i:%s') AS time
//       FROM
//         teaching
//       WHERE
//         id = ?`,
//       [req.params.id],
//       function (err, rows) {
//           res.send(JSON.stringify(rows[0]));
//       }
//   )
// })

// app.get("/teaching/:id", function (req, res) {
//   console.log(`SELECT id, name, content, DATE_FORMAT(time, '%Y-%m-%d %H:%i:%s') AS time FROM teaching WHERE id = ?`)
//   conn.query(`SELECT id, name, content, DATE_FORMAT(time, '%Y-%m-%d %H:%i:%s') AS time FROM teaching WHERE id = ?`,
//       [req.params.id],
//       function (err, rows) {
//           res.send(JSON.stringify(rows[0]));
//       }
//   )
// })

app.post("/teaching", function (req, res) {
  // const mttime=('2023-05-17 15:15:45')
  // const nowTime =moment(mttime,'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
  const nowTime = moment().utcOffset("+08:00").format("YYYY-MM-DD HH:mm:ss");
  conn.query(
    "INSERT INTO something (name, content, time) VALUES (?, ?, CONVERT_TZ(NOW(), '+00:00', '+08:00'))",
    [req.body.name, req.body.content, nowTime],
    function (err, rows) {
      if (err) throw err;
      const responseData = {
        ...req.body,
        time: moment(nowTime).format("YYYY-MM-DD HH:mm:ss"),
      };
      res.send(JSON.stringify(responseData));
    }
  );
});

// app.post("/teaching", function (req, res) {
//   const datetimeString = new Date().toISOString();
//   const formattedString = datetimeString.replace('T', ' ').replace('.000Z', '');
//   conn.query(
//     "INSERT INTO table_name (name, content, time) VALUES (?, ?, CONVERT_TZ(NOW(), '+00:00', '+08:00'))",
//     [req.body.name, req.body.content, formattedString],
//     function (err, rows) {
//       res.send(JSON.stringify(req.body));
//     }
//   );
// });
// ------------------------------------------------
// app.post("/teaching", function (req, res) {
//   const date = new Date();
//   const taiwanTime = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Taipei" }));
//   const myTime= date.toISOString().replace('T','- ').replace('.000Z','- ');
//   conn.query(
//     "INSERT INTO table_name (name, content, time) VALUES (?, ?, CONVERT_TZ(NOW(), '+00:00', '+08:00'))",
//     [req.body.name, req.body.content, myTime],
//     function (err, rows) {
//       if (err) throw err;
//       res.send(JSON.stringify(req.body));
//     }
//   );
// });
// ---------------------------------------------------------

// app.post("/teaching", function (req, res) {
//   const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
//   conn.query("insert into todoTable (name, content, time) values (?, ?, CONVERT_TZ(NOW(), '+00:00', '+08:00'))",
//       [req.body.name, req.body.content, now],
//       function (err, rows) {
//           res.send( JSON.stringify( req.body ));
//       }
//   )

// })

// app.post("/teaching", function (req, res) {
//   const now = moment().format('YYYY-MM-DD mm:ss.SSS');
//   conn.query("insert into table_name (name, content,DATE_FORMAT(time'%Y-%m-%d %H%:%i:%s') time) values (?, ?, CONVERT_TZ(NOW(), '+00:00', '+08:00'))",
//       [req.body.name, req.body.content,now],
//       function (err, rows) {
//           res.send( JSON.stringify( req.body ));
//       }
//   )
//     });

// app.post("/teaching", function (req, res) {
//   const now = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
//   conn.query("insert into table_name (name, content, time) values (?, ?, ?)",
//       [req.body.name, req.body.content, now],
//       function (err, rows) {
//           res.send( JSON.stringify( req.body ));
//       }
//   );
// });
// app.post("/teaching", function (req, res) {
//   conn.query(
//     "INSERT INTO table_name (name, content, DATA_time) VALUES (?, ?, DATE_FORMAT(CONVERT_TZ(NOW(), '+00:00', '+08:00'), '%Y-%m-%d %H:%i:%s'))",
//     [req.body.name, req.body.content, formattedString],
//     function (err, rows) {
//       res.send(JSON.stringify(req.body));
//     }
//   );
// });
