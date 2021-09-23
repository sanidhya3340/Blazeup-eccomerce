import React, { useState, useEffect } from 'react'
import { ProductData } from '../../ProductImages/ProductData'


import './Product.css'
import _ from "lodash";
import { Link } from 'react-router-dom';
import Scroll from '../../Components/Scroll/Scroll';


function Product(props) {


    

    let append = props.appendCart;
    console.log(append ,"cart")


  


    const [filter, Setfilter] = useState(ProductData);
    const [sortType, setSortType] = useState('star');

    useEffect(() => {


        let sorted = null;
        const sortArray = type => {
            const types = {
                Default: 'star',
                High_TO_Low: 'price',
                Low_To_High : 'price',
                By_Rating: 'star'
            };

            const sortProperty = types[type];
            console.log(sortProperty);

            if(type === 'Low_To_High'){
                 sorted = [...ProductData].sort((a, b) =>
                a[sortProperty] - b[sortProperty]);
            }
            else{
             sorted = [...ProductData].sort((a, b) =>
                b[sortProperty] - a[sortProperty]);
            }
            console.log(sorted);
            Setfilter(sorted)
        };
        sortArray(sortType)
    }, [sortType]);



    return (
        <div >
        

            <div class="small-container">
                <div class="row row-2">
                    <h2>All Products</h2>
                    <select onChange={(e) => setSortType(e.target.value)}>
                        <option value="Default">Default</option>
                        <option value="High_TO_Low">High TO Low</option>
                        <option value = "Low_To_High">Low To High</option>
                        <option value="By_Rating">Sort by rating</option>

                    </select>
                </div>

                <Scroll>
                <div class="row">


                    {filter.map((item, index) => {
                        return (
                            <>                               
                                <Link to={{
                                    pathname: '/ProductDetail',
                                    state: { myArrayVariableName: item , 
                                    cart : props.cart,
                                    
                                    },
                                
                                }} replace
                            style={{
                                textDecoration: 'none'
                            }} >



                                <div class="col-4" >

                                    <img loading="lazy" src={item.image} />
                                    <h4>{item.text}</h4>
                                    <div class="rating">

                                        {_.times(item.star, (i) => (
                                            <i className="fa fa-star"></i>

                                        ))}
                                        {_.times(item.unstar, (i) => (
                                            <i className="fa fa-star-o"></i>

                                        ))}
                                    </div>
                                    <p className = "white"><i className="fa fa-inr"></i> {item.price}</p>
                                </div>
                            </Link>
                        


                            </>
                )
                    })}

            </div>

            </Scroll>














{/* 
            <div class="page-btn">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>&#8594;</span>
            </div> */}
        </div>

        </div >
    )
}

export default Product



