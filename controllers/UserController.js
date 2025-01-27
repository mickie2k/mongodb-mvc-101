
var mongoose = require('mongoose')
const User = mongoose.model('User');
const Order = mongoose.model('Order')

async function orderUser(req,res){
    try {
        const { userId, orders} = req.body;
        const user = await User.findById(userId)
        const orderDocument = orders.map(order=>{
          return new Order({
            ...order,
            user: user._id
          })
        })
      
        await Order.insertMany(orderDocument)
        await User.findByIdAndUpdate(userId, { $push: { orders: orderDocument } })
        await user.save();
        res.json({user})
        
    } catch (error) {
      console.log('error', error)
    }
  
}

async function getUser(req,res){
    const userId = req.query.userId
    const user = await User.findById(userId).populate('orders')
    res.json({user})

}

async function createUser(req,res){
    try {
        const userData = req.body
        const username = userData.username
        const email = userData.email
        const age = userData.age
  
        const user = new User({
          username: username,
          email: email,
          age: age
        })
  
    await user.save();
    res.json({user})
    
    } catch (error) {
      console.log('error', error)
    }
  
  
}

module.exports = {
    orderUser,
    getUser,
    createUser
};
