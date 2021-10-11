import React, { useState } from 'react'
import { HashRouter } from "react-router-dom";
import CustomizedDialogs from '../DialogForm/DialogForm1';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Terms1 from './Terms1';
import styled from "styled-components";

import './Terms.css';


export const Terms = ({dis, setDis}) => {

    const [check, setCheck] = useState(true);

    function seecheck(e){
        console.log(e.target.checked);

        if(e.target.checked === true){

            setTimeout(() => {
                setCheck(false);
                setDis(!dis);
            },1000)

            
           
        }
        else{
            setCheck(true);
        }
    }


    return (
        <div className = "condition">


<Overlay style={{display: `${dis? 'none': ''}`}}></Overlay>

            

            
            <div className="contactConatiner" style={{display: `${dis? 'none': ''}`}}
>
            {/* <div className="cent">
               
            </div> */}
            <div className="wrapper">
                <div className="title">
                    <h1 className = "letter">WARNING</h1>
                </div>
                <h2 style = {{color : "white"}}>Are You 18+</h2>
               
                <input type="checkbox" onClick = {(e)=> (seecheck(e))} class="agree" name="agree"/>
                {/* <input type="checkbox"  onClick={()=>setDis(!dis)}/> */}
            
              
            </div>





        </div>
        
    
    
    
        </div>
    )
}




const Overlay  = styled.div`


  cursor: default;
  background: black;
  opacity: 0.95;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  height: 100%;
  width: 100%;  
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: ${({ dis }) => (dis ? "none" : "")};



`