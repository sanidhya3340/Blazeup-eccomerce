import React from 'react'

import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import styled from 'styled-components'
import './FooterElement.css'

const Footer = () => {


    return (
        <>

            <div className = "footer">
                <div className = "container">
                    <div className = "foot">                       
                        <div className = "footer-col2">
                            <img src = {require('./Images/logo.png').default} ></img>
                            
                        </div>
                        


                        <div className ="footer-col4">
                            <h3>Follow Us</h3>
                            <div className="links">
                                <FaFacebook />
                                <FaTwitter/>
                                <FaInstagram/>
                                <FaYoutube/>
                                </div>
                            
                        </div>
                        </div>
                        <hr />
                        <WebsiteRights>© {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    
                </div>
            </div>


    

                    </>

            )
}

            export default Footer;


            const WebsiteRights = styled.small`
              color: #8a8a8a;
            font-size: 16px;
        `;