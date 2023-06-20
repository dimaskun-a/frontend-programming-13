import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlayingMovie(){
    //membuat state movie
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        getNowPlayingMovies();
    },[])

    async function getNowPlayingMovies(){
        //fetch data
        const response = await axios(ENDPOINTS.NOW_PLAYING);

        //simpan data ke state
        setMovies(response.data.results)
    }


    return(
        <div>
            <Hero />
            <Movies title="Now Playing" movies={movies} />
        </div>
    )
}

export default NowPlayingMovie;