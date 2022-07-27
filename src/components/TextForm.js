import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppaercase was clicked" + text);
       let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleLoClick=()=>{
      console.log("Lowercase was clicked" + text);
     let newtext=text.toLowerCase();
      setText(newtext);
  }
    const handleOnChange=(event)=>{
      console.log("OnChange was clicked");
      setText(event.target.value);
  }
  const handleExtraSpace=()=>{
   let newtext=text.split(/[ ]+/);
   console.log(newtext);
   console.log("Extraspace was clicked");
   setText(newtext.join(" "))
}
  
    const [text, setText] = useState("enter text here");    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
           
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary mx-2 my-4" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Scpace</button>
       
        </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text to preview it here"}</p>
    </div>
    </>
  )
}
