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

// Fetch student names and courses
Student.find({},{name:1, course:1, _id:0}) // Fetch only name and course fields
.then((students) => {
console.log("Student Names and Courses:");
console.log(students);
mongoose.connection.close();
});