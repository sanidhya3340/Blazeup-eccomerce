import React from 'react'
import './Account.css'
function Account() {

      const login  = () => {
        var LoginForm = document.getElementById("LoginForm");
        var RegForm = document.getElementById("RegForm");
        var Indicator = document.getElementById("indicator");
        
            RegForm.style.transform = "translateX(300px)";
            LoginForm.style.transform = "translateX(300px)";
            Indicator.style.transform = "translateX(0.29em)"
        
     }

     const register = () => {

        var LoginForm = document.getElementById("LoginForm");
        var RegForm = document.getElementById("RegForm");
        var Indicator = document.getElementById("indicator");


        RegForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(0px)";
        Indicator.style.transform = "translateX(6.2em)"

     }

    
    return (
        <>

        <div className = "account-page">
            <div className = "cotainer">
                <div className = "row">
                    <div className = "col-2">
                        <img src = {require('./Images/logo1.png').default} ></img> 
                    </div>
                
                <div className = "col-2">
                    <div className = "form-container">
                        <div className = "form-btn">
                            <span onClick= {login}>Login</span>
                            <span onClick= {register}>Register</span>
                            <hr id = "indicator"/>
                        </div>

                    <div className="Form">
                        <form id = "LoginForm">
                            <input type = "text" placeholder = "username" required/>
                            <input type = "password" placeholder = "password" required/>
                            <button type= "submit" className = "btn">Login</button>
                            <a href="">Forgot password</a>
                        </form>

                        <form id = "RegForm">
                            <input type = "text" placeholder = "username" required/>
                            <input type="email" placeholder="Email" required/>
                            <input type = "password" placeholder = "password" required/>
                            <button type= "submit" className = "btn">Register</button>
                
                        </form>

                        </div>

                    </div>
                </div>
                    

                </div>
            </div>
        </div>
            
        </>
    )
}

export default Account
