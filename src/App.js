import React,{useState,useEffect} from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Footer from "./Components/Footer/Footer";
import styled from "styled-components";
import { HashRouter } from "react-router-dom";
import { Terms } from "./Components/TermsAndCondition/Terms";


function App() {

  const [loading, setLoading] = useState(false);

  const [dis , setDis] = useState(false);

  // const setDisplay = ()=>{
  //   setDis(true);
  // }


  useEffect(() => {

    // ReactGA.initialize('UA-199375039-1')
    // ReactGA.pageview('/')
      setLoading(true)
      setTimeout(()=> {
        setLoading(false)
      }, 4000)
  },[])
  return (
    <div className="App" style ={{background : "#0D1117" , color : "white"}}>

    { loading ?

    (

      <div style = {{width : '100vw' , height : '100vh'}}>
      <img src={require('./fire.gif').default}  style = {{width : '400px' , marginTop : '20vh' }} alt="loading..." />
      </div>
      
 
    )

    :
    (
      <HashRouter>

            
      

        <Navbar />
        <Terms dis = {dis} setDis = {setDis} />
        <Footer/>
      </HashRouter>
    )}

    </div>
  );
}

export default App;


const Loader = styled.div`
    text-align: center;
    background:  var(--bgPrimary);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

