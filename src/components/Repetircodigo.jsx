import './Repetircodigo.css'

export default function ({ artista, titulo }) {
    return (
        <div className='cancion'>
  <h2>{artista}</h2>
  <p>{titulo}</p>
</div>
    )
}