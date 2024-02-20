const express = require('express')
const path = require('path')

const app = express();
const PORT = 3000; 

app.use(express.json())

app.use(express.static(path.resolve(__dirname, './dist')));

app.listen(PORT, () => {
    console.log(`Serving on ${PORT}`)
});

module.exports = app;