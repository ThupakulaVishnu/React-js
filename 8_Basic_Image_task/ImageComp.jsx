import "./ImageComp.css"
import { useState } from "react";


function ImageComp(){
    var Reacturl="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png";
    var [url,setUrl]=useState(Reacturl);
    var [title,setTitle]=useState("React JS");

    const changeToAngular= () => {
        setUrl("https://www.mindinventory.com/blog/wp-content/uploads/2022/11/angular-15-1.webp");
        setTitle("Angular");
    };

    const changeToReact= () => {
        setUrl(Reacturl);
        setTitle("React JS");
    };

    return (
        <div id="ImageComp">
            <h2 style={{color:"red"}}>{title}</h2>
            <img src={url} alt="Image" width="480" height="300"/>
            <br /><br />

            <button onClick={changeToReact}>React</button>
            <button onClick={changeToAngular}>Angular</button>
        </div>
    );
}

export default ImageComp;