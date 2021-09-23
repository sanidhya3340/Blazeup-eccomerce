import React, { useState } from 'react'
import { HashRouter } from "react-router-dom";
import CustomizedDialogs from '../DialogForm/DialogForm1';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Terms1 from './Terms1';


export const Terms = () => {

    const [check, setCheck] = useState(true);

    function seecheck(e){
        console.log(e.target.checked);

        if(e.target.checked === true){

            setTimeout(() => {
                setCheck(false);
            },1000)
           
        }
        else{
            setCheck(true);
        }
    }


    return (
        <>

        { check ?
    
        (

            
            <div className="contactConatiner">
            {/* <div className="cent">
               
            </div> */}
            <div className="wrapper">
                <div className="title">
                    <h1>Terms And Condition</h1>
                </div>
                <h2 style = {{color : "white"}}>Are You 18+</h2>
               
                <input type="checkbox" onClick = {(e)=> (seecheck(e))} class="agree" name="agree"/>
            
              
            </div>





        </div>
        )
    
        :
    
        (
          
            <HashRouter>
{/*             
            {check ? (
                <CustomizedDialogs>
                <Terms1/>
            </CustomizedDialogs>
            )
            :(
                
            )
            } */}
            


        <Navbar />
        <Footer/>
      </HashRouter>
       
        )}
    
        </>
    )
}
