import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './style.css'
import HomeContainer from './HomeContainer.jsx';
import updatePurchases from './features/finance/financeSlice.js';





const App = () => {

  // const purchaseList = useSelector((state) => state.finance.purchases);
  // const dispatch = useDispath();

  
  // console.log('PURCHASE LIST', purchaseList);
  // function handleClick () {

  //   const name = document.getElementById('name').value;
  //   const price = document.getElementById('price').value;
  //   const category = document.getElementById('category').value;
  
  //     fetch('http://localhost:3000/finance/makePurchase', {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({name: name, price: price, category: category})
  //     })
  //         .then((response) => response.json())
  //         .then((data) => {
          
  //             console.log(data);
  //             dispatch(updatePurchases(data.rows))

  //     });
  
  //     console.log('Fetch reques data')
  // }



    return (
        <div className='mainApp'>
        <div className='allInputs'>
            <div className='labels'>
                <label>Name: </label>
                <label>Price: </label>
                <label>Category: </label>
            </div>

            <div className='inputs'>
                <input className='name' id='name' type="text" />
                <input className='price' id='price' type="text" />
                <input className='category' id='category' type="text" />
            </div>

            <div className='fileButtons'>
            <button className='button'>Add Purchase</button>
            </div>

        </div>
        <div>
          <table>

          </table>
        </div>
        <HomeContainer />
        </div>

    )
};

export default App;
