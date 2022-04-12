var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();

const categoryController = require('../components/categrories/controller');
const authentication = require('../middle/authentication');

/**
 * page: category
 * http://localhost:3000/danh-muc
 * method: get
 * detail: get list categorys
 */
router.get('/', async function (req, res, next) {

  // lấy danh sách danh muc
  const data = await categoryController.getCategories();
  console.log(data)
  res.render('ds_danh_muc', { categories: data });
});

/**
* page: category
* http://localhost:3000/danh-muc
* method: post
* detail: insert new categorys
*/
router.post('/',  async function (req, res, next) {

  // xử lý thêm mới danh muc
  let { body } = req;

  await categoryController.insert(body);

  res.redirect('/danh-muc');
});

/**
 * page: category
 * http://localhost:3000/danh-muc/:id/delete
 * method: delete
 * detail:delete categorys
 */
router.delete('/:id/delete',  async function (req, res, next) {
  // xóa danh muc
  const { id } = req.params;
  await categoryController.delete(id);
  // tra ve dữ liệu dạng json
  res.json({ result: true });
});

/**
 * page: category
 * http://localhost:3000/danh-muc/:id/edit
 * method: get
 * detail:get one category
 */
router.get('/:id/edit', async function (req, res, next) {
  // lấy 1 danh muc
  const { id } = req.params;
  const category = await categoryController.getById(id);

  res.render('update_danh_muc', { category: category });
});

/**
 * page: category
 * http://localhost:3000/danh-muc/:id/edit
 * method: post
 * detail:update one category
 */
router.post('/:id/edit', async function (req, res, next) {
  // cập nhật 1 danh muc
  let { params, body } = req;

  await categoryController.update(params.id, body);

  res.redirect('/danh-muc');
});

/**
 * page: category
 * http://localhost:3000/danh-muc/insert
 * method: get
 * detail:insert new category
 */
router.get('/insert',  async function (req, res, next) {
  // hiển thị trang thêm mới
  const categories = await categoryController.getCategories();
  res.render('them_danh_muc', { categories: categories });
});


module.exports = router;