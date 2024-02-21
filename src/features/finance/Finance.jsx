import React from 'react';
import { useSelector, useDispath } from 'react-redux';
import { updatePurchases } from './financeSlice';



export default function Finance() {
    const purchaseList = useSelector((state) => state.finance.purchases);
    const dispatch = useDispath();
    

    return(
        <div>
          <p>
            {purchaseList}
          </p>
        </div>
    )
}