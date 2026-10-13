// MongooseDelete.js
const Mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/CollegeDb";

// Connect to MongoDB
Mongoose.connect(url)
.then(() => {
    console.log("Connected to MongoDB");

    // Define Schema
    const studentSchema = new Mongoose.Schema({
        rollno: Number,
        name: String,
        course: String,
        semester: Number,
        mark: Number
    });

    // Create Model
    const Student = Mongoose.model('Student', studentSchema);

    // Delete all student records
    return Student.deleteMany({});
})
.then((result) => {
    console.log("Deleted all students Records:");
    console.log(result);

    return Mongoose.connection.close();
})
.catch((err) => {
    console.log(err);
});