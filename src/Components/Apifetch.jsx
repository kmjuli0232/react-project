import React,{useEffect,useState} from "react";

function Apifetch(){
    const[dogs, setDogs]=useState([]);
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random/6")
        .then((response)=>response.json())
        .then((image)=>{
            setDogs(image.message);
        })

    },[]);
    return(
        <>
        <div className="container mt-5">
            <h1 className="text-center mb-4"></h1>
            <div className="row">
                {dogs.map((dog,index)=>(
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card p-2 shadow">
                            <img src={dog} alt="dog" className="img-fluid" height="200" />
                        </div>

                    </div>
                    
                ))}
            </div>

        </div>
        
        
        
        </>
    );
}
export default Apifetch