import React, {useState,useEffect} from 'react'
import emailjs from 'emailjs-com';
import HashLoader from "react-spinners/HashLoader"
import './style.css'
 

function ShippingForm({data , total}) {
    const [loading, setLoading] = useState(false);
    const [checker , setChecker] = useState(true);

    function sendEmail(e) {

        setLoading(true);
        e.preventDefault();

        emailjs.sendForm('service_ye4aqqn', 'template_u7080hw', e.target, 'user_mD8Hk6WfRFtvnszIV8Onu')
            .then((result) => {
                setLoading(false)

                alert('Order Done Check Your Mail...')
                setChecker(false);
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
      <div className="form-class">
        <article className="mw6 center br3 pa3 pa4-ns w-100 mv3 shadow-1">
          <main class="pa4 black-80">
            {checker ? (
              <form class="measure center w-100" onSubmit={sendEmail}>
                <fieldset
                  id="sign_up"
                  className="ba b--transparent ph0 mh0 w-100"
                >
                  <legend className="f4 fw6 ph0 mh0" style={{ color: "white" }}>
                    Shipping Form
                  </legend>
                  <div className="mt3">
                    <label
                      style={{ color: "white" }}
                      className="db fw6 lh-copy f6"
                      for="name"
                    >
                      Name
                    </label>
                    <input
                      style={{ color: "white" }}
                      className="pa2 input-reset ba bg-transparent w-100"
                      type="name"
                      name="name"
                      id="name"
                      required
                    />
                  </div>
                  <div className="mt3">
                    <label
                      style={{ color: "white" }}
                      className="db fw6 lh-copy f6"
                      for="email-address"
                    >
                      Email
                    </label>
                    <input
                      style={{ color: "white" }}
                      className="pa2 input-reset ba bg-transparent w-100"
                      type="email"
                      name="email-address"
                      id="email-address"
                      required
                    />
                  </div>
                  <div className="mt3">
                    <label
                      style={{ color: "white" }}
                      className="db fw6 lh-copy f6"
                      for="tel"
                    >
                      Ph-No
                    </label>
                    <input
                      style={{ color: "white" }}
                      className="pa2 input-reset ba bg-transparent w-100"
                      type="tel"
                      name="tel"
                      id="tel"
                      required
                    />
                  </div>
                  <div className="mt3">
                    <label
                      style={{ color: "white" }}
                      className="db fw6 lh-copy f6"
                      for="address"
                    >
                      Shipping Address
                    </label>
                    <textarea
                      style={{ color: "white" }}
                      className="pa2 input-reset ba bg-transparent w-100"
                      type="text"
                      name="shipping-address"
                      id="shipping-address"
                      required
                    />
                  </div>

                  <div className="mt3">
                    <label
                      style={{ color: "white" }}
                      className="db fw6 lh-copy f6"
                      for="pin-code"
                    >
                      Pin-Code
                    </label>
                    <input
                      style={{ color: "white" }}
                      className="pa2 input-reset ba bg-transparent w-100"
                      type="pin"
                      name="pin-code"
                      id="pin-code"
                      required
                    />
                  </div>

                  <div className="mt3">
                    <label
                      style={{ color: "white" }}
                      className="db fw6 lh-copy f6"
                      for="product-name"
                    >
                      Product name
                    </label>
                    {data.map((curElem, index) => {
                      return (
                        <input
                          style={{ color: "white" }}
                          className="pa2 input-reset ba bg-transparent w-100"
                          readonly="readonly"
                          value={
                            data[index].text +
                            " (quantity : " +
                            data[index].value +
                            ")"
                          }
                          name="product-name"
                          id="product-name"
                        />
                      );
                    })}
                  </div>

                  <div className="mt3">
                    <label
                      style={{ color: "white" }}
                      className="db fw6 lh-copy f6"
                      for="total"
                    >
                      Amount
                    </label>
                    <input
                      style={{ color: "white" }}
                      className="pa2 input-reset ba bg-transparent w-100"
                      readonly="readonly"
                      value={total}
                      name="total"
                      id="total"
                    />
                  </div>
                </fieldset>
                <div>
                  <input
                    style={{ color: "white", backgroundColor: "#3146E9" }}
                    className="btn formSubmit b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            ) : (
              <div>
                <h1 style={{ color: "white" }}>
                  Your Order Is Done Now Complete The Payment Process To Get
                  Your Order
                </h1>
                {/* <h3>Kindely Note Down Your Full Amount Sent To Your Mail</h3> */}

                <a
                  className="formSubmit b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  href={`https://pages.razorpay.com/pl_I865j338eSXjat/view?amount=${total}`}
                  data-text="Pay Now"
                  data-color="#528FF0"
                  data-size="medium"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  Pay Now {total}
                </a>
              </div>
            )}
          </main>
        </article>
      </div>
    );
}

export default ShippingForm
