const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render('user');

})

app.listen(PORT, () => {
    console.log('Server Running on', PORT);
})