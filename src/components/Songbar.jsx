import React from "react"
import { $cancionactual } from "../store"

export default function () {

    const [cancionActual, setCancionActual] = React.useState(null)

    React.useEffect (()=> { 
        $cancionactual.subscribe((store)=>{
            setCancionActual (store)
        })
    }, []) 
    return (
        <div className='songbar'>
            <h2>{cancionActual ? cancionActual.titulo : ''}</h2>
            <p>{cancionActual ? cancionActual.artista :''}</p>
            <audio src={cancionActual ? cancionActual.sonido :''} controls autoPlay></audio >
        </div>
    )
}