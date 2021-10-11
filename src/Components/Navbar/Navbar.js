import React,{useState,createContext} from "react";
import styled from "styled-components";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import "./Navbar.css";
import Home from "../../Pages/Home/Home";
import Product from "../../Pages/Products/Product";
import Contact from "../../Pages/Contact/Contact";
import Account from "../../Pages/Account/Account";
import About from "../../Pages/About/About";
import MyCart from "../../Pages/MyCart/MyCart";
import ProductDetail from "../ProductDetails/ProductDetail";
import ScrollToTop from "../Scroll/ScrollToTop";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Terms } from "../TermsAndCondition/Terms";


export const CartContext = createContext();


const Navbar = () => {

  const [NewEntry , setNewEntery] = useState([]);

  const addToCart = (e,id,image , text , price ,value)=>{
    e.preventDefault();
  
    const newEntery = {id : id, image : image , text : text , price : price , value : value};
  
    console.log(id , image , text ,price ,value);
  
    try{
      setNewEntery([...NewEntry , newEntery])
      toast.success('Item added to the cart', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        });
      
    }
    catch(err){
      alert(err);
    }
    
  
    
  
  }


 
  


  const [IsOpen, setIsOpen] = useState(false);
  const photo = require('../../Logo/logo1.png').default;


  return (
    <div  >
    <ScrollToTop></ScrollToTop>
   

    <CartContext.Provider value = {{addToCart,NewEntry}}>
      <Nav>
        <Logo >
          {/* <img src = {photo} width="120px" style = {{filter : "invert(100%) sepia(0%) saturate(3461%) hue-rotate(321deg) brightness(98%) contrast(200%)"}}></img> */}
      <NavLink  to="/"><img src = {photo} width="120px" ></img></NavLink>
        </Logo>

        <Hamburger onClick={() => setIsOpen(!IsOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>

        <Menu IsOpen={IsOpen}>
          <span onClick={() => setIsOpen(!IsOpen)}>
            <NavLink exact activeClassName="active1" className="text-link" to="/">
              Home
            </NavLink>
          </span>
          <span onClick={() => setIsOpen(!IsOpen)}>
            <NavLink activeClassName="active1" className="text-link" to="/Product">
              Products
            </NavLink>
          </span>
     

          <span onClick={() => setIsOpen(!IsOpen)}>
            <NavLink activeClassName="active1" className="text-link" to="/Contact">
              Contact
            </NavLink>
          </span>

          {/* <span onClick={() => setIsOpen(!IsOpen)}>
            <NavLink activeClassName="active1" className="text-link" to="/Account">
              Account
            </NavLink>
          </span> */}
          <span onClick={() => setIsOpen(!IsOpen)}>
            <NavLink activeClassName="active1" className="text-link" to="/MyCart">
            <img src= {require('./Images/cart.png').default} style = {{filter : "invert(76%) sepia(30%) saturate(3461%) hue-rotate(321deg) brightness(98%) contrast(91%)"}} width="30px" height="30px"/>
            </NavLink>
          </span>
        </Menu>

      </Nav>

      <Switch>
        <Route path="/" exact component={Home}></Route>
        
        {/* <Route path="/Product" component={Product}></Route> */}
        <Route path="/Product"  render={props => <Product/>}></Route>
        
        {/* <Route path="/About" component={About}></Route> */}
        <Route path="/Contact" component={Contact}></Route>
        {/* <Route path="/Account" component={Account}></Route> */}
        <Route path="/ProductDetail" component={ProductDetail}></Route>
       
        <Route path="/MyCart" component={MyCart}></Route>


      </Switch>
      </CartContext.Provider>


      <ToastContainer 
        position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}

      />


    </div>
  )
}

export default Navbar;

const Nav = styled.div`
  
  padding: 0 20px;
  height: 10vh;
  align-content : center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: -webkit-sticky; 
  position: sticky;
  top: 0;
  z-index: 5;
  background: var(--nav-clr);
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding:0;
    height:10vh;
  }


`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 35%;
  justify-content: space-evenly;
  color : white;
  span{
    font-size: 1em;
    
  }

  @media (max-width: 970px) {
    display: flex;
    position: absolute;
    top: 100%;
    ${'' /* padding: 1em 0; */}
     overflow: hidden;
    flex-direction: column;
    width: 100%;
    height: ${({ IsOpen }) => (IsOpen ? "100vh" : "0px")};
    transition: height 0.4s ease-in;
    background:   black;
    span{
      padding: 1em 0;
      color: var(--white-clr);
      font-size: 1.2em;
    }
    
  }
`;



const Logo = styled.a`
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;

  span {
    font-weight: 300;
    font-size: 1.5rem;
  }
`;


const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    margin-bottom: 4px;
    border: solid 1px; 
    border-radius: 5px;
  }

  @media (max-width: 970px) {
    display: flex;
  }
`;
