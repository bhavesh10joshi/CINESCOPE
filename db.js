const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
mongoose.connect("mongodb+srv://josh10bhavesh:zp6aCDbTSZOd1ydK@cluster0.nd6zk.mongodb.net/cinescope?retryWrites=true&w=majority&appName=Cluster0");

const User = new schema({
    username : String ,
    email : {unique : true , type : String},
    password : String 
});

const UserModel = mongoose.model("user" , User);

module.exports = {
    UserModel
};