import React from "react";
import {useState, useEffect} from "react"

export const Counters = () =>
{
    const[count, setCount] = useState(0);

    useEffect(()=>{
        setCount(count+1)
    })

    return(
    <div>
        <h1>Time: {count}</h1>
        
    </div>
    );
}