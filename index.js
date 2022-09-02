const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render('user', { name: 'Davi', phone: '(48) 99999999' });

})

app.listen(PORT, () => {
    console.log('Server Running on', PORT);
})