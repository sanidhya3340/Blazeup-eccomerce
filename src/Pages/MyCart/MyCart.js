import React from 'react'
import './MyCart.css'

import Card from './Card';
import { useContext } from 'react';
import { CartContext } from '../../Components/Navbar/Navbar';

function MyCart(props) {
    const {NewEntry} = useContext(CartContext);

    console.log(NewEntry);
    console.log(NewEntry.length)

   //  console.log(props);
   let data = new Object
   if(NewEntry.length === 0)
   {
       data = false;
   }
   else{
      data = NewEntry;
   }

   
    


    
    
    // console.log(data, "Cart")  
    

    return(
        <>
        {data ? (<Card data = {NewEntry}/>): (
            <div class="small-container cart-page" style={{background: "var(--bgPrimary)" , marginBottom: '15em'}}>

                <table className="phone">
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    
                    <tr className="btn">Your Cart is Empty</tr>

                </table>
                </div>

        ) }
        </>
    )
        // <Card/>
    
}

export default MyCart
