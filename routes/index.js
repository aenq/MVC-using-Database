const router = require('express').Router();
const productsRouter = require('./products-router');
const HomeController = require('../controllers/homeController');

    // GET /
    router.get('/', HomeController.home);

    router.get('/products', productsRouter);

    module.exports = router;
