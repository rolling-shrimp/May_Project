module.exports = {
  get: function (con, callback) {
    con.query(
      "SELECT name,email,phone,Postal_code,address,County,DATE_FORMAT(birthday, '%Y-%m-%d') AS birthday,DATE_FORMAT(create_date, '%Y-%m-%d %H:%i:%s') create_date,DATE_FORMAT(last_date_signin, '%Y-%m-%d %H:%i:%s') last_date_signin FROM user;",
      callback
    );
  },

  //user
  findByEmailAndPassword: function (con, data, callback) {
    con.query(
      "SELECT * FROM user WHERE email = ? AND password = ?",
      [data.email, data.password],
      callback
    );
  },
 

  updateLastDateSignin: function (con, data, id, callback) {
    console.log("updateLastDateSignin: id = " + id);
    con.query(
      "UPDATE user SET last_date_signin = ? WHERE id = ?",
      [data.last_date_signin, id],
      callback
    );
    console.log(data);
  },

  createUser: function (con, data, callback) {
    con.query(
      "INSERT INTO `user`(`name`,`email`,`phone`,`password`,`birthday`,`user_image`,`address`,`County`,`Postal_code`) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        
        data.name,
        data.email,
        data.phone,
        data.password,
        data.birthday,
        data.user_image,
        data.address,
        data.County,
        data.Postal_code,
      ],
      callback
    );
  },
  updateUser: function (con, data, id, callback) {
    con.query(
      "UPDATE `user` SET `password` = ? WHERE `id` = ?",
      [data.password, id],
      callback
    );
  },
  updateData: function (con, data, id, callback) {
    con.query(
      "UPDATE `user` SET `name` = ?, `phone` = ?, `address` = ?",
      [data.name, data.phone, data.address, id],
      callback
    );
  },
  deleteUser: function (con, id, callback) {
    con.query("DELETE FROM `user` WHERE ?", [id], callback);
  },

  //user_type
  getUserType: function (con, callback) {
    con.query("SELECT * FROM user_type", callback);
  },
};
