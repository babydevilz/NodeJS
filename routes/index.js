var express = require('express');
var router = express.Router();
const authentication = require('../middle/authentication')


const userController = require('../components/user/controller');
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET login page. */
router.get('/dang_nhap', [authentication.checkLogin], function (req, res, next) {
  res.render('login');
});

/* GET table page. */
router.get('/table', function (req, res, next) {
  res.render('table');
});

/* GET chart page. */
router.get('/chart', function (req, res, next) {
  res.render('chart');
});

/* GET form page. */
router.get('/form', function (req, res, next) {
  res.render('form');
});

/* GET table page. */
router.get('/detail', function (req, res, next) {
  res.render('detail');
});






/* page: login */
// http://localhost:3000/dang_nhap
// method: post
router.post('/dang_nhap', async function (req, res, next) {
  // xử lý login
  // đọc email, password từ body
  const { email, password } = req.body;
  // kiểm tra email, password
  const result = await userController.login(email, password);
  // nếu đúng: chuyển qua trang sản phẩm
  if (result) {
    const token = jwt.sign({ _id: result._id, email: result.email }, 'myKey');
    req.session.token = token;
    res.redirect('/san-pham');
  }
  // nếu sai: vẫn ở trang login
  else {
    res.redirect('/dang_nhap');
  }
});

/* GET logout . */
router.get('/dang_xuat', [authentication.checkLogin], function (req, res, next) {
  req.session.destroy(function (err) {
    //đăng xuất thành công trở về trang đăng nhập
    res.redirect('dang_nhap');
  });

});


module.exports = router;
