const express = require('express'); const app = express(); 
 
app.use(express.json()); 
 
let students = [ 
    { rollNo: 1, name: 'sreenivas', course: 'MCA', email: 'sreenivasapai007@gmail.com' },     { rollNo: 2, name: 'ashwin', course: 'MCA', email: 'Ashwin@gmail.com' } 
]; 
 
app.get('/students', (req, res) => {     res.json(students); 
}); 
 
app.post('/students', (req, res) => {     students.push(req.body);     res.status(201).json(req.body); 
}); 
 
app.put('/students/:rollNo', (req, res) => {     const rollNo = parseInt(req.params.rollNo); 
    const student = students.find(s => s.rollNo === rollNo); 
 
    if (!student) {         return res.status(404).send("Student not found"); 
    } 
    student.name = req.body.name;     student.course = req.body.course;     student.email = req.body.email; 
 
    res.json(student); 
}); app.delete('/students/:rollNo', (req, res) => {     students = students.filter( 
        s => s.rollNo != req.params.rollNo 
    ); 
 
    res.json({ message: 'Student deleted' }); 
}); 
 
app.listen(3000, () => {     console.log('Server running at http://localhost:3000'); }); 
