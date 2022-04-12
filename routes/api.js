var express = require('express');
var router = express.Router();


const authentication = require('../middle/authentication')
const userController = require('../components/user/controller');
const productController = require('../components/products/controller');
const jwt = require('jsonwebtoken');



/* page: login */
// http://localhost:3000/login
// method: post
router.post('/login', async function (req, res, next) {
    const { email, password } = req.body;
    const result = await userController.login(email, password);
    if (result) {
        const token = jwt.sign({ _id: result._id, email: result.email }, 'myKey');
        res.json({ status: true, result, token});
    }
    else {
        res.json({ status: false });
    }
});


/* page: login */
// http://localhost:3000/api/register
// method: post
router.post('/register', async function (req, res, next) {

    const { email, password, confirm_password } = req.body;
    const result = await userController.register(email, password, confirm_password);
    if (result) {
        res.json({ status: true });
    }
    else {
        res.json({ status: false });
    }
});

/**
 * page: product
 * http://localhost:3000/api/products
 * method: get
 * detail: get list products
 */
 router.get('/products', [authentication.checkToken], async function (req, res, next) {

    // lấy danh sách sản phẩm
    const products = await productController.getProducts();
    res.json(products);
  });


  /**
 * page: detail
 * http://localhost:3000/api/products/:id/detail
 * method: get
 * detail: get list products
 */
router.get('/products/:id/detail', [authentication.checkToken], async function (req, res, next) {
    const { id } = req.params;
    // lấy chi tiết sản phẩm
    const products = await productController.getById(id);
    res.json(products);
});

module.exports = router;
