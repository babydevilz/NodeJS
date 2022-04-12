const userModel = require('./model');



// tầng gọi database
exports.login = async (email) => {
    // const user = data.filter(i => i.email==emai)[0];
    // return user;
    // select id email password from  users where email = ''
    const user = await userModel.findOne({ email: email }, 'id email password');
    return user;
}

exports.register = async (email, password) => {
    const user = new userModel({ email, password });
    return await user.save();
}






// var data= [
//     {id: 1, email:'admin@gmail.com', password:'1234',name:'hau'}
// ]