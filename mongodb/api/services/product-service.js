let throwError = function(error){
    if (error){
        throw Error(error);
    }
};

exports.search = function(params,callback){
    Product.find(params,function(err,products){
        throwError(err);
        callback(products);

    });
};

exports.save = function(product,callback){
    let newProduct = new Product(product);
    newProduct.save(function(err,product){
        throwError(err);
        callback(product);
    });
};

exports.get = function(productId,callback){
    Product.get({
        _id: product._id
    }, product,{
        new: true
    },function(err, product){
        throwError(err);
        callback(product);
    });
};

exports.delete = function(productId,callback){
    Product.remove({
        _id: productId
    },function(err,callback){
        callback();
    });
};

