import React, {useState,useEffect} from 'react'
import emailjs from 'emailjs-com';
import HashLoader from "react-spinners/HashLoader"
import './style.css' 

function ShippingForm({data , total}) {
    const [loading, setLoading] = useState(false);

    function sendEmail(e) {

        setLoading(true);
        e.preventDefault();

        emailjs.sendForm('service_ye4aqqn', 'template_u7080hw', e.target, 'user_mD8Hk6WfRFtvnszIV8Onu')
            .then((result) => {
                setLoading(false)

                alert('Order Done Check Your Mail...')
                // console.log(result.text);
            }, (error) => {
                setLoading(false)
                alert('some error occured')
                // console.log(error.text);
            });
        e.target.reset()
    }

    
  if (loading) return <div style = {{textAlign : 'center'}}> <HashLoader  color={"#FCA2A2"} loading={loading}  size={30} /></div>;

    
    return (
        <div className="">
            <article className="mw6 center br3 pa3 pa4-ns w-100 mv3 shadow-1"  >
                <main class="pa4 black-80">
                    <form class="measure center w-100" onSubmit={sendEmail}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 w-100">
                            <legend className="f4 fw6 ph0 mh0">Shipping Form</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent w-100" type="name" name="name" id="name"  required/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent w-100" type="email" name="email-address" id="email-address" required/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="tel">Ph-No</label>
                                <input className="pa2 input-reset ba bg-transparent w-100" type="tel" name="tel" id="tel" required/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="address">Shipping Address</label>
                                <textarea className="pa2 input-reset ba bg-transparent w-100" type="text" name="shipping-address" id="shipping-address" required/>
                            </div>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="pin-code">Pin-Code</label>
                                <input className="pa2 input-reset ba bg-transparent w-100" type="pin" name="pin-code" id="pin-code" required/>
                            </div>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="product-name">Product name</label>
                                <input className="pa2 input-reset ba bg-transparent w-100" readonly="readonly"   value = {data.item.text}  name="product-name" id="product-name" />
                            </div>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="total">Amount</label>
                                <input className="pa2 input-reset ba bg-transparent w-100" readonly="readonly"  value = {total}  name="total" id="total" />
                            </div>
                          
                          
                            
                        </fieldset>
                        <div >
                            <input className="formSubmit b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" />
                        </div>

                    </form>
                </main>
            </article>
        </div>
    )
}

export default ShippingForm
