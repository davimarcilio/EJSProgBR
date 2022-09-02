const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;


let users = [{
    id: 0,
    name: 'Davi',
    phone: '(11)999999',
}, {
    id: 1,
    name: 'Davi2',
    phone: '(112)22999999',
}, {
    id: 2,
    name: 'Davi3',
    phone: '(113)333999999',
}]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render('user', { users });

})

app.listen(PORT, () => {
    console.log('Server Running on', PORT);
})