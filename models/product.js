const products = require('./../products.json');

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    static findAllProduct() {
        const result = products.map((element) => {
            return new Product(element.id, element.name, element.price);
        });
        return result;
    }

    static findProductById(id) {
        const result = products.find((element) => {
            return element.id == id;
        });
        return new Product(result.id, result.name, result.price);
    }

    static addProduct(nama, price) {
        const id = !products.length
        ? 1
        : (products[products.length - 1].id +1);
        products.push({
          id : id,
          name : req.body.name,
          price: req.body.price
        });
    }
    
}

module.exports = Product;