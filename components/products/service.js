
const productModel = require('./model');

/**
 * 
 * lay danh sach tat ca san pham tu database
 */

exports.getProducts = async () =>{
  //select * from  products
    const products = productModel.find().populate('category_id')
    return products;
    //return data;
}


/**
 * lấy thông tin 1 sp
 */

exports.getById = async (id) => {
    // const product = data.filter(item => item._id == id)[0];
    // return product;

    const product = await productModel.findById(id).populate('category_id');
    return product;
}

/**
 * xoas sp theo id
 */
exports.delete = async (id)=>{
  //data = data.filter(item => item._id !=id)
  await productModel.findByIdAndDelete(id);
}

/**
 * theme mới sản phẩm
 */

exports.insert = async  (product) =>{
  const p = new productModel(product);
  await p.save();
  //data.push(product);
}


/**
 * sữa thông tin sp
 * spread operator
 */

exports.update = async (id, product) => {
    // data = data.map(item => {
    //   if (item._id == id){
    //     item = {...item, ...product}
    //   }
    //   return item;
    // })

    await productModel.findByIdAndUpdate(id, product);
}

var data = [{
    "_id": 1,
    "name": "Spice - Onion Powder Granulated",
    "price": 8,
    "quantity": 32,
    "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
    "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "category_id": {
        "_id": 7,
        "name": "Lemon Pepper",
        "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
      },
    "released": "2021-08-31"
  }, {
    "_id": 2,
    "name": "Vector Energy Bar",
    "price": 51,
    "quantity": 70,
    "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
    "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "category_id":{
        "_id": 2,
        "name": "Venison - Racks Frenched",
        "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
      },
    "released": "2022-01-29"
  }, {
    "_id": 3,
    "name": "Eggplant Oriental",
    "price": 40,
    "quantity": 15,
    "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
    "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "category_id":{
        "_id": 9,
        "name": "Soup - Knorr, Ministrone",
        "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
      },
    "released": "2021-05-24"
  }, {
    "_id": 4,
    "name": "Salt - Table",
    "price": 69,
    "quantity": 66,
    "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
    "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "category_id": {
        "_id": 9,
        "name": "Soup - Knorr, Ministrone",
        "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
      },
    "released": "2021-10-29"
  }, {
    "_id": 5,
    "name": "Macaroons - Two Bite Choc",
    "price": 36,
    "quantity": 30,
    "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
    "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "category_id": {
        "_id": 4,
        "name": "Tuna - Canned, Flaked, Light",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
      },
    "released": "2021-06-22"
  }, {
    "_id": 6,
    "name": "Cheese - Goat",
    "price": 87,
    "quantity": 23,
    "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
    "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "category_id": {
        "_id": 2,
        "name": "Venison - Racks Frenched",
        "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
      },
    "released": "2021-12-15"
  }, {
    "_id": 7,
    "name": "Tomatoes - Cherry, Yellow",
    "price": 67,
    "quantity": 64,
    "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
    "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "category_id":{
        "_id": 8,
        "name": "Extract - Vanilla,artificial",
        "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
      },
    "released": "2021-09-19"
  }, {
    "_id": 8,
    "name": "Flower - Commercial Bronze",
    "price": 57,
    "quantity": 57,
    "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
    "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "category_id": {
        "_id": 1,
        "name": "Chips - Assorted",
        "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
      },
    "released": "2021-07-12"
  }, {
    "_id": 9,
    "name": "Olives - Morracan Dired",
    "price": 65,
    "quantity": 44,
    "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
    "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "category_id": {
        "_id": 9,
        "name": "Soup - Knorr, Ministrone",
        "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
      },
    "released": "2021-08-29"
  }, {
    "_id": 10,
    "name": "Muffin Mix - Banana Nut",
    "price": 10,
    "quantity": 82,
    "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "category_id": {
        "_id": 4,
        "name": "Tuna - Canned, Flaked, Light",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
      },
    "released": "2021-11-28"
  }]