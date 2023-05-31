module.exports = {
  //order
  get: function (con, callback) {
    con.query(
      `SELECT user.name AS username, user.email, order_no, 
      DATE_FORMAT(order_date, '%Y-%m-%d %H:%i:%s') order_date, 
      order_status.status, payment_type.value, address.city, address.address_line,
      shipping_method.name, shipping_method.shipping_price, order_total 
      FROM shop_order 
      INNER JOIN user ON shop_order.userId = user.id 
      INNER JOIN order_status ON shop_order.order_statusId = order_status.id 
      INNER JOIN payment_type ON shop_order.payment_methodId = payment_type.id 
      INNER JOIN address ON shop_order.shipping_addressId = address.id 
      INNER JOIN shipping_method ON shop_order.shipping_methodId = shipping_method.id;`,
      callback
    );
  },

  create: function (con, data, callback) {
    con.query(
      `INSERT INTO shop_order (
        userId,
        order_date,
        order_no,
        payment_methodId,
        shipping_addressId,
        shipping_methodId,
        order_total,
        order_statusId
      )
      SELECT
        ?,
        NOW(),
        CONCAT(DATE_FORMAT(NOW(), '%Y%m%d'), LPAD(order_count + 1, 4, '0')),
        ?,
        ?,
        NULL,
        ?,
        ?
      FROM (
        SELECT COUNT(*) AS order_count
        FROM shop_order
        WHERE DATE(order_date) = CURDATE()
      ) AS temp`,
      [
        data.userId,
        data.payment_methodId,
        data.shipping_addressId,
        data.order_total,
        data.order_statusId,
      ],
      callback
    );
  },

  update: function (con, data, id, callback) {
    con.query(
      "UPDATE `shop_order` SET `payment_methodId` = ?, `shipping_addressId` = ?, `shipping_methodId` = ?, `order_total` = ?, `order_statusId` = ? WHERE `id` = ?",
      [
        data.payment_methodId,
        data.shipping_addressId,
        data.shipping_methodId,
        data.order_total,
        data.order_statusId,
        id,
      ],
      callback
    );
  },
  deleteProduct: function (con, id, callback) {
    con.query("DELETE FROM `shop_order` WHERE id = ?", [id], callback);
  },

  //order_status
  getStatus: function (con, callback) {
    con.query("SELECT * FROM order_status", callback);
  },
  createStatus: function (con, data, callback) {
    con.query(
      "INSERT INTO `order_status` (`status`) VALUES (?)",
      [data.status],
      callback
    );
  },
  updateStatus: function (con, data, id, callback) {
    con.query(
      "UPDATE `order_status` SET `status` = ? WHERE `id` = ?",
      [data.status, id],
      callback
    );
  },
  deleteStatus: function (con, id, callback) {
    con.query("DELETE FROM `order_status` WHERE id= ?", [id], callback);
  },
};
