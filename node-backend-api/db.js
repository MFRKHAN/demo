const mongoose = require('mongoose');

const dbConnection = async ()=>{
   // const uri = "mongodb+srv://khanalfazlur:MangoDB%40123456@cluster0.eh3vwuk.mongodb.net";
//const uri = "mongodb+srv://khanalfazlur:MangoDB%40123456@cluster0.rf8gk.mongodb.net";
const uri = "mongodb+srv://khanalfazlur:xjwC7ojjop5cZiAv@cluster0.l2c7d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

 
    try{
       const {connect} = await mongoose.connect(uri, {
        "dbName":"empData"
       })
       console.log("DB connection Successfully", connect)
    }
    catch(error){
        console.log("error", error)
    }
}
module.exports = {dbConnection}