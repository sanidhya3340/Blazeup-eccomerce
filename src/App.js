import React,{useState,useEffect} from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Footer from "./Components/Footer/Footer";
import styled from "styled-components";
import { HashRouter } from "react-router-dom";


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    // ReactGA.initialize('UA-199375039-1')
    // ReactGA.pageview('/')
      setLoading(true)
      setTimeout(()=> {
        setLoading(false)
      }, 4000)
  },[])
  return (
    <div className="App">

    { loading ?

    (
      <Loader>
       <ClimbingBoxLoader color={"#FCA2A2"} loading={loading}  size={30} />
       </Loader>
    )

    :
    (
      
      <HashRouter>
        <Navbar />
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

