import React, { useState,useContext } from 'react'

import './ProductDetail.css'
import NumericInput from 'react-numeric-input';

import Card from '../../Pages/Home/Card';
import { Link } from 'react-router-dom'
import { CartContext } from '../Navbar/Navbar';

function ProductDetail(props) {

    const {item,addToCart} = useContext(CartContext);
    
    const [value,setValue] = useState(1);

    console.log(props.location.state)



  //  const data = props.location.state.myArrayVariableName

   // console.log(props.location.state.myArrayVariableName.id, "ashdliahd")
    //console.log(props.location.state.cart, "ashdliahd")
    //console.log(props.location.state, "ashdliahd")
    return (
        <div >
            <div class="small-container">
                <div class="row">
                    <div class="col-2">
                
                        <img src=  { (props.location.state) ?  props.location.state.myArrayVariableName.image : ''} width="100%" id="ProductImg" />

                    </div>
                    <div class="col-2">

                        <h1>{(props.location.state) ? props.location.state.myArrayVariableName.text: ''}</h1>
                        <h4><i className="fa fa-inr"></i> { (props.location.state) ?  props.location.state.myArrayVariableName.price : ''}</h4>



                        <NumericInput className = "quanti" onChange={setValue} min={1} value={value} />

                        <button className = "btn" onClick = {(e) => {(props.location.state) ? addToCart(e,props.location.id,props.location.state.myArrayVariableName.image ,props.location.state.myArrayVariableName.text,
                         props.location.state.myArrayVariableName.price, value ) : ''}}>Add To Cart</button>



                       {/* <Link to = {{
                            pathname: '/MyCart',
                                    state: {item: data,quanti: value}
                                    
                       }}   replace
                            style={{
                                textDecoration: 'none'
                            }}  class="btn"> Add To Cart</Link> */}

                        <h3>PRODUCT DETAILS <i class="fa fa-indent"></i></h3>
                        <br />
                        <p>{(props.location.state) ? props.location.state.myArrayVariableName.productDetails : ''}</p>


                    </div>
                </div>



            </div>

            {/* <h2 className="title">Related Products</h2>
            <div className="latestProduct">
                <button className="leftSlider" onClick={()=>leftSlider(0)}><i class="fa fa-angle-left" aria-hidden="true"></i></button>
                <div className="latestRow">
                    <Card Data={props.location.state.myArrayVariableName.info} />

                </div>
                <button className="rightSlider" onClick={()=>rightSlider(0)}><i class="fa fa-angle-right" aria-hidden="true"></i></button>
            </div> */}
        </div>

    )
}

export default ProductDetail
