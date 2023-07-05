import React, { useState } from 'react';



export default function TextForm(props) {
  
  //declaring the state variable text with function settext
  const [text, setText] = useState("");
  const upperCase=()=>{
    //console.log("request to change the text to uppercase");
    let newText=text.toUpperCase();

    setText(newText);

  }
  const lowerCase=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  const cal=()=>{
    
    if(text.length===0)
     return 0;
     else{
       let w=text.trim();
        return w.split(" ").length;
     }
  }
const handleClearText=()=>{
  let newText="";
  setText(newText);
}
 const onchangeHandler=(event)=>{
  setText(event.target.value)//add the text in text area 
 }
 
 function textToSpeech(){
  const Speech= new SpeechSynthesisUtterance();
  const message= document.getElementById("myBox").value;
  Speech.lang='eng';
  Speech.text= message;
  window.speechSynthesis.speak(Speech);
}

  return (
    <>
    
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1 style={{color:props.mode==='light'?'black':'white'}} >{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            placeholder="enter the text here"
            onChange={onchangeHandler}
            style={{backgroundColor:props.mode==='light'?'#36303005':'#a191d1',
            color:props.mode==='light'?'black':'white'
                    }}
          ></textarea>
        </div>
        <div>
        <button className="btn btn-primary mx-1 my-1" onClick={upperCase} >UpperCase</button>
        <button className="btn btn-primary mx-1"onClick={lowerCase} >LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>ClearText</button>
        <button className="btn btn-primary mx-1 my-1" onClick={textToSpeech}>TextSpeech</button>
        </div>
      </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
          <h2>Text Summary</h2>
          <p>{cal()} words and {text.length} characters </p>
          <p>{0.008*cal()} minutes to read</p>
        
        </div>
    </>
  );
}
