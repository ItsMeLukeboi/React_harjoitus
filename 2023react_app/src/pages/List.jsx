import React from "react";
import { useState} from "react";



export const List = () =>{
    const [content, setContent] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function clearList(){
        setContent([]);
    }

    const removeHandler = (removeIndex)=>{
        const removeItem = content.filter((item, index)=>{
            return removeIndex !== index;
        });
        setContent(removeItem);
    }

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
                 onChange={e=> setInputValue(e.target.value)}
                 required/>

                <input type = "submit" value="subbmit"/>
                <button form="another form" onClick={clearList}>Clear List</button>
                {
                    content.map((item,index)=>(
                        <ul>
                            <li>
                                <h2 key={index}>{item}</h2>
                                <button form="sepperate form" onClick={()=>removeHandler(index)}>Delete?</button>
                            </li>
                        </ul>
                    ))
                }
            </form>
            
        </div>
    </div>
    );
}