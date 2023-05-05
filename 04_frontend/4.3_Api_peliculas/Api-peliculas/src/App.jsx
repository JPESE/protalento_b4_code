import { useState } from 'react'
import axios from 'axios'
import YouTube from 'react-youtube';
import './App.css'

function App() {
  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = 'dcb357894be50f7b1fc4efdc83650e6b'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  //variables de estado
  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey]= useState("")
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "loading Movies"});
  const [playing, setPlaying] = useState(false);

  //función para realizar la petición por get a la api
  const fetchMovies = async(searchKey) =>{
    const type = searchKey ? "search" : "discover"
    const {data: { results },
  } = await axios.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key: API_KEY,
      query: searchKey,
    },
  });

  setMovies(results)
  setMovie(results[0])

  }

  return (
  
    <>
      <div>
       {/*contenedor que va a mostrar posters de las peliculas actuales*/}
       <div>

       </div>
      
      </div>
      
    </>
  )
}

export default App
