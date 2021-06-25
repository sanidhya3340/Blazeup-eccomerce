import React, { useState } from 'react'

import './ProductDetail.css'
import NumericInput from 'react-numeric-input';

import Card from '../../Pages/Home/Card';
import { Link } from 'react-router-dom'

function ProductDetail(props) {
    
    const [value,setValue] = useState(1);

   // console.log(value)

       
    const rightSlider = (num) => {
        const row = document.querySelectorAll('.latestRow');
        row[num].scrollLeft += 500;
        // console.log(row[num]);

    }
    const leftSlider = (num) => {
        const row = document.querySelectorAll('.latestRow');
        row[num].scrollLeft -= 500;
        // console.log(row[num]);

    }

    const data = props.location.state.myArrayVariableName

   // console.log(props.location.state.myArrayVariableName.id, "ashdliahd")
    //console.log(props.location.state.cart, "ashdliahd")
    //console.log(props.location.state, "ashdliahd")
    return (
        <div>
            <div class="small-container">
                <div class="row">
                    <div class="col-2">
                        <img src={props.location.state.myArrayVariableName.image} width="100%" id="ProductImg" />

                    </div>
                    <div class="col-2">

                        <h1>{props.location.state.myArrayVariableName.text}</h1>
                        <h4><i className="fa fa-inr"></i> {props.location.state.myArrayVariableName.price}</h4>



                        <NumericInput className = "quanti" onChange={setValue} min={1} value={value} />



                       <Link to = {{
                            pathname: '/MyCart',
                                    state: {item: data,quanti: value}
                                    
                       }}   replace
                            style={{
                                textDecoration: 'none'
                            }}  class="btn"> Add To Cart</Link>

                        <h3>PRODUCT DETAILS <i class="fa fa-indent"></i></h3>
                        <br />
                        <p>{props.location.state.myArrayVariableName.productDetails}</p>


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
