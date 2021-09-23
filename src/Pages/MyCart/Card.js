import React, { useState } from 'react';

import NumericInput from 'react-numeric-input';
import CustomizedDialogs from '../../Components/DialogForm/DialogForm'
import ShippingForm from '../../Components/ShippingForm/ShippingForm'

const Card = ({data}) => {
    console.log(data);
  //  const [qua,setQua] = useState(data);
   // console.log(qua);

    

 
    

    const tax = 35;

    let total = 0;

    

    return ( 
        <div>
        
            <div className="small-container cart-page">

                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>


                    {data.map((curEle,index) => {

                        return(
                        
                        <tr>
                        <td>
                            <div class="cart-info">
                                <img src={data[index].image} />
                                <div>
                                    <p>{data[index].text} </p>
                                    <small>Price: <i className="fa fa-inr"></i> {data[index].price}</small><br />

                                   
                                </div>
                            </div>
                        </td>
                        <td><input className="qunati" value={data[index].value} /></td>
                        <td><i className="fa fa-inr"></i> {data[index].price * data[index].value}</td>

                        
                        {
                                        total = total +  data[index].price * data[index].value ,
                                        console.log(total)
                                    }
                    </tr>
                        )
                    })}

                   

                </table>

                <div class="total-price">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td><i className="fa fa-inr"></i> {total}</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td><i className="fa fa-inr"></i> {tax}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td><i className="fa fa-inr"></i> {total + tax}</td>
                        </tr>

                    </table>
                </div>
                <div class="total-price">

                <CustomizedDialogs >
                    <ShippingForm data= {data} total = {total + tax}></ShippingForm>
                </CustomizedDialogs>
                    {/* <button className="btn">Proceed to checkout <i className="fa fa-inr"></i></button> */}
                </div>

            

            </div>
        </div>
     );
}
 
export default Card;