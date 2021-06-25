import React,{useState} from 'react'
import './Contact.css'
import emailjs from 'emailjs-com';
import HashLoader from "react-spinners/HashLoader"
import styled from "styled-components";

function Contact() {
    const [loading, setLoading] = useState(false);

    
    function sendEmail(e) {
        setLoading(true);
        e.preventDefault();

        emailjs.sendForm('service_ye4aqqn', 'template_284g6sq', e.target, 'user_mD8Hk6WfRFtvnszIV8Onu')
            .then((result) => {
                setTimeout(()=>{
                    setLoading(false)
                alert('query send sucessfully we will contact you soon')
                },2000)
                
                // console.log(result.text);
            }, (error) => {
                setLoading(false)
                alert('some error occured')
                // console.log(error.text);
            });
        e.target.reset()
    }
     ;
    return (
        <div className="contactConatiner">
            <div className="cent">
                <img src={require('../Account/Images/logo1.png').default} ></img>
            </div>
            
            <div className="wrapper">
                <div className="title">
                    <h1>contact us</h1>
                </div>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="field">
                    
                        <input  name="to_name" type="text" className="input" placeholder="Name" required />
                        <input name="email-address" type="email" className="input" placeholder="Email Address" required />
                        <input type="tel"
                               name = "Ph_No"
                            className="input" placeholder="Phone" required />

                    </div>
                    <div className="msg">
                        <textarea  name="message" placeholder="Message" required></textarea>
                        <button className="send_btn">send</button>
                    </div>
                                     
                </form>
                <Load style = {{textAlign : 'center'}}> <HashLoader  color={"#FCA2A2"} loading={loading}  size={100} /></Load>  
            </div>





        </div>
    )
}

export default Contact

const Load = styled.div`
    position: absolute;
    top:80%;
    left: 30%;
    width: 0vw;
    background: red;
    z-index: 10 !important;
    max-height: ${({ loading }) => (loading ? "200vh" : "0px")};

    @media(max-width: 600px){
        top: 50%;
        left: 80%;
    }

`;