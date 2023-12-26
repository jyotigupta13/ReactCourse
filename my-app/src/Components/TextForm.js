import React, {useState} from 'react'

export default function TextFrom(props) {

    const handleOnClickUpper = () => {
       // console.log("upper case")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnClickLower = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = ''
        setText(newText)
    }
    const handleDownloadClick = () => {
        let newText = text.Do
        setText(newText)
    }
    const handleOnChange = (event)=> {
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter your text here")
    return(
        <>
        <div className="container">
            <h2>{props.heading}</h2>        
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>               
            </div>
            <button className="btn btn-primary mx-1" onClick={handleOnClickUpper}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={handleOnClickLower}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleDownloadClick}>Download Text</button>
        </div>
        <div className="container">
            <h3>Your text summary</h3>
            <p>Words: {text.split(" ").length} Character: {text.length}</p>
            <p>Minimum read time: {0.008 * text.split(" ").length} minute</p>
            <h3>
                Preview
            </h3>
            {text}
        </div>
        </>
    )
}