const Product = require('../models/product');

class ProductController {
    static FindAllProducts(req,res) {
        Product.findAllProduct()
            .then((result) => {
                res.render('products', {products: result});
            })
            .catch((err) => {
                res.render('server-error');
            })
    }

    static renderAddProduct(req,res) {
        res.render('add-product');
    }

    static FindProductByID (req, res) {
        const {id} = req.params;
        Product.findProductById(id)
        .then((result) => {
            res.render('products', {products: result});
        })
        .catch((err) => {
            if ( err.name === 'ProductNotFound') {
                res.render('notFound');
            } else {
                res.render('server-error');
            }
            res.send(err);
        });
    }

    static AddProduct (req, res) {
        const {name, description, quantity} = req.body;
        Product.addProduct(name, description, quantity)
        .then((result) => {
            res.redirect('/products');
        })
        .catch((err) => {
                res.render('server-error');
        });
       }

    static renderEditProduct (req, res) {
        const {id} = req.params;
        Product.renderEditProduct(id)
        .then((result) => {
            res.render('products', {products: result});
        })
        .catch((err) => {
            if ( err.name === 'ProductNotFound') {
                res.render('notFound');
            } else {
                res.render('server-error');
            }
            res.send(err);
        });
    }

    static EditProduct (req, res) {
        Product.editProduct()
        .then(() => {

        })
        .catch((err) => {

        })
    }
}

module.exports = ProductController;