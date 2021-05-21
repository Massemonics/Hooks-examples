import React, { useState, useEffect } from "react"
import { getDogs } from "./DogsAPI"
import { useParams } from 'react-router-dom'



const DogRandomNum = () =>{
    const [ dogImages, setDogImages ] = useState([])
    const [ moreDogs, setMoreDogs ] = useState(false)
    let   { num }   = useParams()

    console.log(moreDogs)

    const loadMore = () =>{
       setMoreDogs( Math.floor(Math.random() * 14))
        
    }

    const loadDogImages = async () => {
         
        setDogImages( await getDogs(  (moreDogs) ? moreDogs : num) )
    }

    useEffect(()=>{
        return loadDogImages()
    },[moreDogs])

    return (
            <div  className = 'more-dogs'>
                <div className = 'dog-container'>
                {dogImages.map((image, i) =>  <img src={image} key={i} /> )}
                </div>
            <br />
            <button onClick = {loadMore}>More Dogs</button>
            </div>
        )
    }


export default DogRandomNum