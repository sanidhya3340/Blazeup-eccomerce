import React, { useState } from 'react';
import NumericInput from 'react-numeric-input';
import CustomizedDialogs from '../../Components/DialogForm/DialogForm'
import ShippingForm from '../../Components/ShippingForm/ShippingForm'


const Card = ({data}) => {
    
    const [qua,setQua] = useState(data.quanti);

    const price = qua*data.item.price
    

    const tax = 35;

    const total = qua *data.item.price + 35;

    

    return ( 
        <div>
        
            <div className="small-container cart-page">

                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>

                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src={data.item.image} />
                                <div>
                                    <p>{data.item.text}</p>
                                    <small>Price: <i className="fa fa-inr"></i> {data.item.price}</small><br />
                                   
                                </div>
                            </div>
                        </td>
                        <td><NumericInput className = "qunati" onChange={setQua} min={1} value={qua} /></td>
                        <td><i className="fa fa-inr"></i> {price}</td>
                    </tr>

                </table>

                <div class="total-price">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td><i className="fa fa-inr"></i> {price}</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td><i className="fa fa-inr"></i> {tax}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td><i className="fa fa-inr"></i> {total}</td>
                        </tr>

                    </table>
                </div>
                <div class="total-price">

                <CustomizedDialogs >
                    <ShippingForm data= {data} total = {total}></ShippingForm>
                </CustomizedDialogs>
                    {/* <button className="btn">Proceed to checkout <i className="fa fa-inr"></i></button> */}
                </div>

            

            </div>
        </div>
     );
}
 
export default Card;