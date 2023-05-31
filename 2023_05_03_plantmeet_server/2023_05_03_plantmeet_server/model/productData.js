module.exports = {
  get: function (con, callback) {
    const query = `
      SELECT 
        product.*, 
        product_category.category_name AS category_name,
        CONCAT(
          '[', 
          GROUP_CONCAT('"', product_image.image, '"' SEPARATOR ','), 
          ']'
        ) AS images
        FROM 
        product 
        INNER JOIN product_image ON product.id = product_image.productId 
        INNER JOIN product_category ON product.categoryId = product_category.id
      GROUP BY 
        product.id;
    `;
    con.query(query, callback);
  },

  //product_schema

  createProduct: function (con, data, callback) {
    con.query(
      "INSERT INTO `product`(`categoryId`,`name`,`description`,`content`,`others`,`qty_in_stock`,`price`,`SKU`) VALUES (?,?,?,?,?,?,?,?)",
      [
        data.categoryId,
        data.name,
        data.description,
        data.content,
        data.others,
        data.qty_in_stock,
        data.price,
        data.SKU,
      ],
      callback
    );
  },
  updateProduct: function (con, data, id, callback) {
    con.query(
      "UPDATE `product` SET `categoryId` = ?, `name` = ?, `description` = ?, `content` = ?, `others` = ?, `qty_in_stock` = ?, `price` = ?, `SKU` = ? WHERE `id` = ?",
      [
        data.categoryId,
        data.name,
        data.description,
        data.content,
        data.others,
        data.qty_in_stock,
        data.price,
        data.SKU,
        id,
      ],
      callback
    );
  },
  deleteProduct: function (con, id, callback) {
    con.query("DELETE FROM `product` WHERE id = ?", [id], callback);
  },

  // //product_type_schema
  // getType: function (con, callback) {
  //   con.query("SELECT * FROM product_type", callback);
  // },

  
  //getProductByType
  getProductByType: function (con, productType, callback) {
    con.query(
      `
      SELECT product.*,
      product_category.category_name,
      CONCAT(
        '[', 
        GROUP_CONCAT('"', product_image.image, '"' SEPARATOR ','), 
        ']'
      ) AS images
      FROM product
      INNER JOIN product_category ON product.categoryId = product_category.id
      INNER JOIN product_image ON product.id = product_image.productId
      WHERE product_category.product_type = ?
      GROUP BY 
      product.id;
    `,
      [productType],
      callback
    );
  },

  getProductByTypeDetail: function (con, productType,id, callback) {
    con.query(
      `
      SELECT product.*,
      product_category.category_name,
      CONCAT(
        '[', 
        GROUP_CONCAT('"', product_image.image, '"' SEPARATOR ','), 
        ']'
      ) AS images
      FROM product
      INNER JOIN product_category ON product.categoryId = product_category.id
      INNER JOIN product_image ON product.id = product_image.productId
      WHERE product_category.product_type = ?
      AND product.id = ?
      GROUP BY 
      product.id;
    `,
      [productType,id],
      callback
    );
  },



  //product_category_schema
  getCategory: function (con, callback) {
    con.query("SELECT * FROM product_category", callback);
  },



  createCategory: function (con, data, callback) {
    con.query(
      "INSERT INTO `product_category`(`category_name`) VALUES (?)",
      [data.name],
      callback
    );
  },
  updateCategory: function (con, data, id, callback) {
    con.query(
      "UPDATE `product_category` SET `category_name` = ? WHERE `id` = ?",
      [data.name, id],
      callback
    );
  },
  deleteCategory: function (con, id, callback) {
    con.query("DELETE FROM `product_category` WHERE id = ?", [id], callback);
  },

  // INSERT INTO `product_image` (`id`, `productId`, `image`) VALUES (NULL, '1', 'https://imgur.com/EcUUnp2');

  //product_image_schema
  getImage: function (con, callback) {
    con.query("SELECT * FROM product_image", callback);
  },

  createImage: function (con, data, callback) {
    con.query(
      "INSERT INTO `product_image`(`productId`, `image`) VALUES (?,?)",
      [data.productId, data.image],
      callback
    );
  },

  updateImage: function (con, data, id, callback) {
    con.query(
      "UPDATE `product_image` SET `productId` = ?, `image` = ? WHERE `id` = ?",
      [data.productId, data.image, id],
      callback
    );
  },

  deleteImage: function (con, id, callback) {
    con.query("DELETE FROM `product_image` WHERE id = ?", [id], callback);
  },
};
