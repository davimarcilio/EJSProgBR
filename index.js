const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000

app.get('/', (req, res) => {


})

app.listen(PORT, () => {
    console.log('Server Running on', PORT);
})