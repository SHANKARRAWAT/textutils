import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import AboutUs from './components/AboutUs'
import Alert from './components/Alert'
import { useState } from 'react';

// import {
//   BrowserRouter as Router,
//  Routes,
//   Route,
  
// } from "react-router-dom";


function App() {
  const[mode,setMode]=useState("light");
  const toggleMode=()=>{
    if(mode==="dark"){
     setMode("light");
     document.body.style.backgroundColor='white';
     showAlert("success","light mode enabled");
     document.title='text utils light mode'
    }
     else
     {
      setMode("dark")
      document.body.style.backgroundColor='#212177';
      showAlert("success","dark mode enabled")
      document.title="text utils dark mode"
     }
  }
  const[alert,setAlert]=useState(null);
  const showAlert=(status,msg)=>{
     setAlert({
      msg:msg,
      status:status
     })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
       <>
        <Navbar title='TextUtils' aboutUs='about' mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
         
        <TextForm  heading="Enter Text To analyze"  mode={mode}/>

        </div>
        {/* <Router> */}
{/* you have to put navbar inside the router because linking is done in nvabar
 */}
              {/* <Routes> */}
                      
                      {/* <Route  path="/about" element={<AboutUs/>} />
                      <Route  path="/"  element={ <TextForm  heading="Enter Text To analyze"  mode={mode}/>}/> */}

                {/* </Routes>
          </Router> */}
       
       </>
  );
}

export default App;
