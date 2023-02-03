const router = require('express').Router();
const ProductController = require('../controllers/productController');
// const products = require('./../products.json');

router.get('/', ProductController.FindAllProducts);
router.get('/add', ProductController.renderAddProduct);
router.get('/edit/:id', ProductController.EditProduct);
router.get('/:id', ProductController.FindProductByID);
router.post('/', ProductController.AddProduct);

module.exports = router;
