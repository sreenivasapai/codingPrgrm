
const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const employee = {
        id: 1,
        name: 'sreenivas',
        course: 'MCA',
        email: 'sreenivasapai007@gmail.com'
    };

    res.render('employee', { employee });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
