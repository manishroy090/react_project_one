

import React, { useEffect, useState } from "react";


export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here")  ;
  // setText("new text");
 const convertToUperCase = ()=>{
     let newText = text.toUpperCase();
     setText(newText);
 }

 const convertToLowerCase = () => {
    let newText = text.toLowerCase();
     setText(newText);
 }

 const handleOnChange = (event) =>{
  setText(event.target.value);
 }

  return (
    <>
    <div className="container">
      <form className="was-validated">
        <div className="mb-3">
          <label htmlFor="validationTextarea">{props.heading}</label>
          <textarea className="form-control is-invalid" id="validationTextarea" value={text} placeholder="Required example textarea" required rows="8" onChange={handleOnChange}></textarea>
         <div className="d-flex mt-2">
          <button type="button" className="btn btn-primary mx-2 mt-" onClick={convertToUperCase}>ConverttoUpperCase</button>
          <button type="button" className="btn btn-primary" onClick={convertToLowerCase}>ConvertToLowerCase</button>
          </div>
        </div>
      </form>
      </div>

      <div className="container">
         <h1>Your text Summary</h1>
         <p>{text.split(" ").length} words  and {text.length} characters</p>
         <p>{0.008*text.split(" ").length} Minutes Read</p>
         <h2>Preview</h2>
         <p>{text}</p>
      </div>
    </>
  )
}