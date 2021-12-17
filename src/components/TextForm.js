import React, { useState } from 'react'


export default function TextForm(props) {


    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

   
    const handleCopy = () => {
       // console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")
        document.getSelection().removeAllRange();  
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
    }

    const handleTiClick = () => {
        
    }

    const handleSeClick = () => {

    }


    const handleRedo = () => {

    }

    const handleUndo = () => {

    }
    
    

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1 style={{ marginBottom:'revert'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? '#141f77' : 'white', color: props.mode === 'dark' ? 'white' : '#141f77' }} 
                     id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-success mx-1 mb-3" disabled={text.length===0} onClick={handleUpClick}>UPPERCASE</button>
                <button className="btn btn-primary mx-1 mb-3" disabled={text.length===0} onClick={handleLoClick}>lowercase</button>
                <button className="btn btn-primary mx-1 mb-3" disabled={text.length===0} onClick={handleTiClick}>Title Case</button>
                <button className="btn btn-primary mx-1 mb-3" disabled={text.length===0}  onClick={handleSeClick}>Sentence Case</button>
                <button className="btn btn-success mx-1 mb-3" disabled={text.length===0}  onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 mb-3" disabled={text.length===0}  onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 mb-3" disabled={text.length===0}  onClick={handleUndo}>Undo</button>
                <button className="btn btn-success mx-1 mb-3" disabled={text.length===0}  onClick={handleRedo}>Redo</button>
                <button className="btn btn-success mx-1 mb-3" disabled={text.length===0}  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
               
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#161616' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.0008 * (text.split(" ").filter((element) => { return element.length !== 0 }).length)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}