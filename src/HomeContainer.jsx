import React, { useState, useEffect } from 'react';
import Article from "./Article.jsx";


//import Buffer from 'node:buffer';
// const { Buffer } = require('node:buffer');

const HomeContainer = () => {

    const articleObjects = [];
    const [articleComponentList , setArticleComponentList] = useState([]);
    const newarticleComponentList = [];

    useEffect(() => {

    fetch('http://localhost:3000/home/getToken')
    .then((response) => response.json())
    .then((data) => { 
        console.log(data)
        let token = data.access_token;
        let subreddit = 'technology'

        fetch('http://localhost:3000/home/getSubreddit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                authorization: `bearer ${token}`,
                subreddit: subreddit
            })
        })
        .then((response) => response.json())
        .then((subredditData) => {
            console.log(subredditData);
            for (let i = 0; i < subredditData.data.children.length; i++){
                articleObjects.push(subredditData.data.children[i]);
                let imageLink = '';
                if (subredditData.data.children[i].data.preview !== undefined){
                    imageLink = subredditData.data.children[i].data.preview.images[0].source.url;
                }
                newarticleComponentList.push( <Article  key={i} img={imageLink} title={subredditData.data.children[i].data.title} url={subredditData.data.children[i].data.url} />)

            }
            setArticleComponentList(newarticleComponentList);
            console.log(newarticleComponentList);
        });

    })

    }, [])


    return (

        <div>
            <table>
                {articleComponentList}
            </table>
        </div>

    )


}

export default HomeContainer;