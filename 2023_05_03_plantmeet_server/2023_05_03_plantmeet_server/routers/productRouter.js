const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");


// product
router.get("/", productController.index);
router.post("/", productController.productCreate);
router.put("/:id", productController.productUpdate);
router.delete("/:id", productController.productDelete);


//product_type
router.get("/:product_type", productController.productType);
router.get("/:product_type/:id", productController.productTypeDetail);


// product_category
router.get("/category", productController.category);
router.post("/category", productController.categoryCreate);
router.put("/category/:id", productController.categoryUpdate);
router.delete("/category/:id", productController.categoryDelete);



// product_image
router.get("/image", productController.image);
router.post("/image", productController.imageCreate);
router.put('/image/:id', productController.imageUpdate);
router.delete('/image/:id', productController.imageDelete);

module.exports = router;
