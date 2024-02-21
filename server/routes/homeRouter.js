const express = require('express');

const { Buffer } = require('node:buffer');

const router = express.Router();



router.get("/getToken", (req, res) => {
    console.log('REACHED HERE IN GET TOKEN CONTROLLER');
    const username = 'RZheUpam_AVtsTRxS_V3hA'; 
    const password = 'O7wz6C2TFy2fRQ2UkaJP3TCK-x7IAA'; 
    const encodedBase64Token = new Buffer.from(`${username}:${password}`).toString("base64")
    const authorization = `Basic ${encodedBase64Token}`;

    fetch('https://www.reddit.com/api/v1/access_token', {
        method: 'POST',
        mode:'no-cors',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
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
    .then(data => {

        console.log(data);
        res.locals.tokenInfo = data;
        console.log('RES.LOCALS.TOKENINFO ', res.locals.tokenInfo)
        res.status(200).json(res.locals.tokenInfo);
    });


    // console.log(`Token Info `, res.locals.tokenInfo);
    // res.status(200).json(res.locals.tokenInfo);
  });


  router.post("/getSubreddit", (req, res) => {
    console.log('REACHED HERE IN GET subreddit CONTROLLER');
    // const username = 'RZheUpam_AVtsTRxS_V3hA'; 
    // const password = 'O7wz6C2TFy2fRQ2UkaJP3TCK-x7IAA'; 
    // const encodedBase64Token = new Buffer.from(`${username}:${password}`).toString("base64")
  
    console.log('REQ BODY IN GET SUBREDDIT ', req.body);
    const authorization = req.body.authorization;
    const subreddit = req.body.subreddit;

    fetch(`https://oauth.reddit.com/r/${subreddit}/hot`, {
        method: 'GET',
        mode:'no-cors',
        headers: {
            'Authorization' : authorization
        },
      })
    .then(response => response.json())
    .then(data => {

        console.log(data);
        res.locals.subreddit = data;
        console.log('RES.LOCALS.TECH STUFF ', res.locals.subreddit)
        res.status(200).json(res.locals.subreddit);
    });


    // console.log(`Token Info `, res.locals.tokenInfo);
    // res.status(200).json(res.locals.tokenInfo);
  });



module.exports = router;