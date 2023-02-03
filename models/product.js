const pool = require('../config/connection');
// const products = require('./../products.json');

class Product {
    constructor(id, name, description, quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }

    static findAllProduct() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT id, name, description, quantity FROM products')
                .then((rows) => {
                    const result = rows.map(element.id, element.name, element.description, element.quantity);
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        })
    }

    static findProductById(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT id, name, description, quantity FROM products WHERE id = $1')
            .then((rows) => {
                if (rows.length) {
                    throw {name : "ProductNotFound"};
                }
    
                const result = new Product(rows[0].id,rows[0].name,rows[0].description,rows[0].quantity,)
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
        }); 
    }

    static addProduct(name, description, quantity) {
        return new Promise((resolve, reject) => {
            pool.query(`INSERT INTO products (name, description, quantity) VALUES ($1, $2, $3)`, 
            {name, description, quantity})
            .then((rows) => {
                if (rows.length) {
                    throw {name : "ProductNotFound"};
                }
    
                const result = new Product(rows[0].id,rows[0].name,rows[0].description,rows[0].quantity,)
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
        })
    }
    
    static renderEditProduct () {
        return new Promise ((resolve, reject) => {
            pool.query (``)
            .then((rows) = {

            })
            .catch((err) => {

            })
        })
    }
}

module.exports = Product;