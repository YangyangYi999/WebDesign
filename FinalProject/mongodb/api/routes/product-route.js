'user strict';

module.exports = function(app){
    const productController = require('../controllers/product-controller');

    app.route('/products')
    .get(productController.list)
    .post(productController.post);

    app.route('./products/:productId')
    .get(productController.get)
    .put(productController.put)
    .delete(productController.delete);
};