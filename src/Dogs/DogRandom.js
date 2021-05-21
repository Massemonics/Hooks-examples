import React, { useState, useEffect } from "react";
import { getDog } from "./DogsAPI"


const DogRandom = () => {

    const [ dogImage, setDogImage] = useState()

    const setRandomDog = async () => {
        setDogImage( await getDog() );
    }

    useEffect (() =>{
        return setRandomDog()
    },[])

        return (
            <div className = 'dog-unique'>
                <img src={dogImage} alt="random dog"/>
                <br />
                <button onClick={()=>{setRandomDog()}}>Random Dog</button>
            </div>
        )
} 

export default DogRandom