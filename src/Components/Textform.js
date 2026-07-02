import React, {useState} from 'react'
export default function Textform(props) {
const handleUpClick =()=>{
    //console.log("UpperCase ws clicked " + text);
    let newText= text.toUpperCase();
    setText(newText )
    props.showAlert("Converted to Uppercase","success")
}
const handleLOClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowerCase","success")
}
const handleOnChange =(event)=>{
    //console.log("On change");
    setText(event.target.value)
}
const handleCopy=()=>{
    console.log("handle copy is run")
    var text=document.getElementById('myBox')
    text.select();
    text.setSelectionRange(0,99999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success")
}
    const[text,setText]=useState ('');
    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark' ? 'white' : 'black'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
      
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#292e33' : 'white',color: props.mode==='dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>  Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLOClick}>  Convert to LowerCase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>  Copy text</button>    
    </div>
    <div className="container my-3">
        <h2>Your text summary </h2>
        <p>words: {text.split(" ").filter((element)=>{return element.length!==0}).length} , chracters:{text.length} </p>
        <p>{0.008* text.split(" ").length} Minutes to read</p>
    </div>
    </>
  )
} 
