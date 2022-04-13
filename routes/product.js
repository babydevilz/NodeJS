var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();

const productController = require('../components/products/controller');
const categoryController = require('../components/categrories/controller');
const upload = require('../middle/upload');
const authentication = require('../middle/authentication');

/**
 * page: product
 * http://localhost:3000/san-pham
 * method: get
 * detail: get list products
 */
router.get('/', [authentication.checkLogin], async function (req, res, next) {

  // lấy danh sách sản phẩm
  const data = await productController.getProducts();
  console.log(data)
  res.render('table', { products: data });
});

/**
* page: product
* http://localhost:3000/san-pham
* method: post
* detail: insert new products
*/
router.post('/', [upload.single('image'), authentication.checkLogin], async function (req, res, next) {

  // xử lý thêm mới sản phẩm
  let { body, file } = req;
  let image = ''
  if (file) {
    image = `http://hau13.herokuapp.com/images/${file.filename}`;
  }
  body = { ...body, image };
  await productController.insert(body);

  res.redirect('/san-pham');
});

/**
 * page: product
 * http://localhost:3000/san-pham/:id/delete
 * method: delete
 * detail:delete products
 */
router.delete('/:id/delete', [authentication.checkLogin], async function (req, res, next) {
  // xóa sản phẩm
  const { id } = req.params;
  await productController.delete(id);
  // tra ve dữ liệu dạng json
  res.json({ result: true });
});

/**
 * page: product
 * http://localhost:3000/san-pham/:id/edit
 * method: get
 * detail:get one product
 */
router.get('/:id/edit', [authentication.checkLogin], async function (req, res, next) {
  // lấy 1 sản phẩm
  const { id } = req.params;
  const product = await productController.getById(id);
  //lấy danh mục 1 sp
  const categories = await categoryController.getCategories();

  res.render('form', { product: product, categories: categories });
});

/**
 * page: product
 * http://localhost:3000/san-pham/:id/edit
 * method: post
 * detail:update one product
 */
router.post('/:id/edit', [upload.single('image'), authentication.checkLogin], async function (req, res, next) {
  // cập nhật 1 sản phẩm
  let { params, file, body } = req;
  delete body.image;

  if (file) {
    let image = `http://hau13.herokuapp.com/images/${file.filename}`;// thay thành ip v4
    body = { ...body, image };
  }

  await productController.update(params.id, body);

  res.redirect('/san-pham');
});

/**
 * page: product
 * http://localhost:3000/san-pham/insert
 * method: get
 * detail:insert new product
 */
router.get('/insert', [authentication.checkLogin], async function (req, res, next) {
  // hiển thị trang thêm mới
  const categories = await categoryController.getCategories();
  res.render('product_form', { categories: categories });
});


module.exports = router;