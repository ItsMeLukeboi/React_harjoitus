import React from "react";
import { useState} from "react";



export const List = () =>{
    const [content, setContent] = useState([]);
    const [inputValue, setInputValue] = useState("");
    return(
    <div>
        <div>
            <form onSubmit={(event)=>{
                event.preventDefault()
                const temp = [inputValue,...content]
                setContent(temp);
                setInputValue("");
            }}>
                <input type = "text" 
                 placeholder="Type here..."
                 value={inputValue}
                 required/>

                <input type = "submit" value="subbmit"/>
            </form>
        </div>
    </div>
    );
}