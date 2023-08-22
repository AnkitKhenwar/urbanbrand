const mongoose = require('mongoose');
const { Schema } = mongoose;
const OrderSchema = new mongoose.Schema({
    name: {type:String},
    email: {type:String, required:true},
    mobile: {type:Number, required:true},
    price: {type:Number, required:true},
    address: {type:String, required:true}

  },{timestamps:true});

  mongoose.models={}

  export default mongoose.model("Order",OrderSchema);