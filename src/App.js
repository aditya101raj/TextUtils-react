
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";




function App() {
  const[mode,setMode]= useState('light');//weather  the dark mode is enabled or not 
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1800);
  }

 const toggleMode=()=>{
    if(mode==='light'){
     setMode('dark');
    document.body.style.backgroundColor='grey'
  showAlert("Dark mode is enabled","success")
  document.title="TextUtil-DarkMode";}
    
    
  else{
  setMode('light');
document.body.style.backgroundColor='white'
showAlert("light  mode is enabled","success")
document.title="TextUtil-LightMode";}

  }
  return (<>
<Navbar title="Text" mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>
<div className='container my-3' ></div>
<Routes>
  
<Route
path='/'
element={
<Textform heading="Enter your text here"
showAlert={showAlert}
mode={mode}/>}
/>
  <Route
  path='about'
  element={<About mode={mode}/>}
  />
</Routes>

</> );

}

export default App;