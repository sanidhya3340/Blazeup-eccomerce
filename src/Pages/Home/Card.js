import React, { useState } from 'react';
import './Card.css'
// import { Data } from './CardData/Data';
import { Link } from 'react-router-dom';
import _ from "lodash";
const Card = ({ Data }) => {



    return (

        <>

            {Data.map((item, index) => {

                return (

                    <>


                        <Link to={{
                            pathname: '/ProductDetail',
                            state: { myArrayVariableName: item }
                        }} replace
                            style={{
                                textDecoration: 'none'
                            }}  >

                            <div className="col-4">



                                <a href="#"><img src={item.image} loading = "lazy" /></a>
                                <h4><a href="product-details.html">{item.text} </a></h4>


                                <div className="rating">

                                    { }

                                    {_.times(item.star, (i) => (
                                        <i className="fa fa-star"></i>

                                    ))}
                                    {_.times(item.unstar, (i) => (
                                        <i className="fa fa-star-o"></i>

                                    ))}



                                    {/* <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i> */}
                                </div>
                                <p className = "white"><i className="fa fa-inr"></i> {item.price}</p>
                                <p className = "white"> Quantity :  {item.quantity}</p>
                            </div>
                        </Link>
                    </>

                )

            })}

        </>



    );
}

export default Card;