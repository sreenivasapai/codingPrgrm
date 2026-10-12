const mongoose = require("mongoose"); 
//connect to mongoDb
mongoose.connect("mongodb://127.0.0.1:27017/CollegeDb")
.then(()=> console.log("MongoDb Connected"))
.catch(err => console.log(err));

//Define Schema
const studentSchema =new mongoose.Schema({
    rollno: Number,
    name:String,
    course:String,
    semester:Number,
    mark:Number
});

//Create Model
const Student = mongoose.model("students",studentSchema); //creates a model called Student , This model is used to add and retrive data from studentCollections

// Update course of student with rollno 103
Student.updateOne(
    { rollno: 103 },
    { $set: { course: "MSC CS" } }
)
.then((result) => {
console.log("Student Course Updated Successfully");
console.log(result);
mongoose.connection.close();
})
.catch(err => console.log(err));