import React,{useState} from "react";

export const Counter =()=>{
    const[count,setCount]= useState(0);

    const increment =()=>{
        setCount(count+1);
    };

    const decriment =()=>{
        setCount(count-1);
    };
    return (
      <>
        <h1>My Counter</h1>
        <div className="mycounter">
            <button className="btn btn-primary" type="submit" onClick={increment}>increment</button>
            <p>{count}</p>
        <button className="btn btn-primary" type="submit" onClick={decriment}>decriment</button>

        </div>
      </>
    );



};

 