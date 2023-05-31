const activityData = require("../model/activityData");

module.exports = {
  index: function (req, res) {
    activityData.get(req.con, function (err, result) {
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
};
