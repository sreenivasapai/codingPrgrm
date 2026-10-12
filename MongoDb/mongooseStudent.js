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

//Insert Student Records
const insertStudents = async() =>{
    await Student.insertMany([
        //{rollno:101,name:"Ashwin",course:"MCA ",semester:1,mark:85},
        //{ rollno: 102, name: "Tharun", course: "MCA ", semester: 1, mark: 86 },
        { rollno: 103, name: "Anandhan", course: "MCA ", semester: 1, mark: 84 },
        { rollno: 104, name: "Nandhu", course: "MCA ", semester: 1, mark: 83 }

    ]);
    console.log("Records Record Inserted Successfully");  //this insertMany() method is used to insert multiple records into the student collection
};
insertStudents(); //calls the fnction so that the program runs and inserts the records into the student collection
