const orderData = require("../model/orderData");

module.exports = {

  //order
  index: function (req, res) {
    orderData.get(req.con, function (err, result) {
      if (err) {
        res.send({
          err: err,
        });
      }
      console.log(result);
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({
          err: "錯誤",
        });
      }
    });
  },
  create: function (req, res) {
    orderData.create(req.con, req.body, function (err, result) {
      if (err) {
        res.send({
          err: err,
        });
      } else {
        res.send(result);
      }
    });
  },
  update: function (req, res) {
    orderData.update(req.con, req.body, req.params.id, function (err, result) {
      if (err) {
        res.send({
          err: err,
        });
      } else {
        res.send(result);
      }
    });
  },
  delete: function (req, res) {
    orderData.delete(req.con, req.params.id, function (err, result) {
      if (err) {
        res.send({
          err: err,
        });
      } else {
        res.send(result);
      }
    });
  },
  

  //order_status
  status: function (req, res) {
    orderData.getStatus(req.con, function (err, result) {
      if (err) {
        res.send({
          err: err,
        });
      }
      console.log(result);
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({
          err: "錯誤",
        });
      }
    });
  },
  statusCreate: function (req, res) {
    orderData.createStatus(req.con, req.body, function (err, result) {
      if (err) {
        res.send({
          err: err,
        });
      } else {
        res.send(result);
      }
    });
  },
  statusUpdate: function (req, res) {
    orderData.updateStatus(
      req.con,
      req.body,
      req.params.id,
      function (err, result) {
        if (err) {
          res.send({
            err: err,
          });
        } else {
          res.send(result);
        }
      }
    );
  },
  statusDelete: function (req, res) {
    orderData.deleteStatus(req.con, req.params.id, function (err, result) {
      if (err) {
        res.send({
          err: err,
        });
      } else {
        res.send(result);
      }
    });
  },
};
