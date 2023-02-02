const Product = require('../models/product');

class ProductController {
    static FindAllProducts(req,res) {
        const result = Product.FindAllProduct;
        res.render('products', { products : result });
    }

    static renderAddProduct(req,res) {
        res.render('add-product');
    }

    static FindProductByID (req, res) {
        const result = Product.findProductById(req.params.id);
        res.render('products', {products : result});
    }

    static AddProduct (req, res) {
        const {name, price} = req.body;
        Product.addProduct(name,price);
        res.redirect('/products');
       }
}

module.exports = ProductController;