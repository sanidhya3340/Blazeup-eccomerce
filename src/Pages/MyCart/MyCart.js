import React,{ useState,useEffect } from 'react'
import './MyCart.css'

import Card from './Card';

function MyCart(props) {
    let data = new Object
  //  console.log(props);
    if(props.location.state === null)
    {
        data = false;
    }
    else{
       data = props.location.state;
    }

    


    
    
    // console.log(data, "Cart")  
    

    return(
        <>
        {data ? (<Card data = {data}/>): (
            <div class="small-container cart-page" style={{background: "var(--bgPrimary)" , marginBottom: '15em'}}>

                <table className ="phone">
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    
                    <tr className="btn" style={{marginLeft: "15em"}}>Your Cart is Empty</tr>

                </table>
                </div>

        ) }
        </>
    )
        // <Card/>
    
}

export default MyCart
