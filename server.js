const express = require('express')
const path = require('path')

const app = express();
const PORT = 3000; 

const { Buffer } = require('node:buffer');

// const cors = require('cors');


app.use(express.json())

app.use(express.static(path.resolve(__dirname, './dist')));

// app.use(cors());

    const username = 'RZheUpam_AVtsTRxS_V3hA'; 
    const password = 'O7wz6C2TFy2fRQ2UkaJP3TCK-x7IAA'; 
    const encodedBase64Token = new Buffer.from(`${username}:${password}`).toString("base64")
    const authorization = `Basic ${encodedBase64Token}`;

    fetch('https://www.reddit.com/api/v1/access_token', {
        method: 'POST',
        mode:'no-cors',
        headers: {
            
            'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization' : authorization
        },
        body: new URLSearchParams({
            'grant_type': 'password',
            'username': 'bingbong937',
            'password': 'bingbong'
        }),
    
      })
    .then(response => response.json())
    .then(data => console.log(data));



    

app.listen(PORT, () => {
    console.log(`Serving on ${PORT}`)
});

module.exports = app;