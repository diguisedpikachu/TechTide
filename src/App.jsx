import React from 'react';
import css from './style.css'

function handleClick () {

    // fetch('http://localhost:300/purchases', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({name: messageInput, price: passwordInput, category: categoryInput})
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
        
    //         console.log(data);
    // });

    console.log('Fetch reques data')
}


const App = () => {
    return (
        <div className='mainApp'>
        <div className='allInputs'>
            <div className='labels'>
                <label>Name: </label>
                <label>Price: </label>
                <label>Category: </label>
            </div>

            <div className='inputs'>
                <input className='name' type="text" />
                <input className='price' type="text" />
                <input className='category' type="text" />
            </div>

            <div className='fileButtons'>
            <button className='button' onClick={handleClick}>Add Purchase</button>
            </div>

        </div>

        <div className='list'>

            <ul className='unorderList'>
                <li>Learn machine learning at:  https://mit-online.getsmarter.com/</li>
                <li>New feture of react (Concurrent React) learn at: https://www.dhiwise.com/post/deep-dive-into-react-concurrent-mode </li>
                <li>Be part of this free seminar in NYC reserve your spot here: </li>
                <li>Be part of this free seminar in NYC reserve your spot here: </li>
            </ul>            
        </div>

        </div>

    )
};

export default App;
