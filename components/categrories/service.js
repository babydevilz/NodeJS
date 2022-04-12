const categoryModel = require('./model');
//lay ds categories
exports.getCategories = async () =>{
    // return data
    // 
    return await categoryModel.find();
}


/**
 * lấy thông tin 1 danh muc
 */

 exports.getById = async (id) => {
  const category = await categoryModel.findById(id);
  return category;
}

/**
* xoas sp theo id
*/
exports.delete = async (id)=>{
//data = data.filter(item => item._id !=id)
await categoryModel.findByIdAndDelete(id);
}

/**
* theme mới sản phẩm
*/

exports.insert = async  (category) =>{
const p = new categoryModel(category);
await p.save();
}


/**
* sữa thông tin sp
* spread operator
*/

exports.update = async (id, category) => {

  await categoryModel.findByIdAndUpdate(id, category);
}






var data = [{
    "_id": 1,
    "name": "Chips - Assorted",
    "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
  }, {
    "_id": 2,
    "name": "Venison - Racks Frenched",
    "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
  }, {
    "_id": 3,
    "name": "Foil Cont Round",
    "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
  }, {
    "_id": 4,
    "name": "Tuna - Canned, Flaked, Light",
    "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
  }, {
    "_id": 5,
    "name": "Carbonated Water - Strawberry",
    "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
  }, {
    "_id": 6,
    "name": "Salmon - Fillets",
    "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
  }, {
    "_id": 7,
    "name": "Lemon Pepper",
    "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
  }, {
    "_id": 8,
    "name": "Extract - Vanilla,artificial",
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
  }, {
    "_id": 9,
    "name": "Soup - Knorr, Ministrone",
    "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
  }, {
    "_id": 10,
    "name": "Coconut Milk - Unsweetened",
    "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
  }]