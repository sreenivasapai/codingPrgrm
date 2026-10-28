
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const student = {
        rollNo: 1,
        name: 'sreenivas',
        course: 'MCA',
        email: 'sreenivasapai007@gmail.com'
    };

    res.render('student', { student });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
