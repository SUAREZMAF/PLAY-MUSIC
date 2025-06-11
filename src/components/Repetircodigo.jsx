import { $cancionactual } from '../store'
import './Repetircodigo.css'

export default function ({ artista, titulo,sonido }) {

    const handlerclick = ( ) => {
        $cancionactual.set ({ artista, titulo,sonido })
    }
    return (
        <div className='cancion' onClick={handlerclick}>
            <h2>{artista}</h2>
            <p>{titulo}</p>
        </div>
    )
}