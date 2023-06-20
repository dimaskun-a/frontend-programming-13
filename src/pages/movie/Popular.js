import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies"
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie(){
    //membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        getPopularMovies();
    },[])

    async function getPopularMovies(){
         //fecth data dengan axios
        const response = await axios(ENDPOINTS.POPULAR);

        //simpan data ke state movie
        setMovies(response.data.results)
    }

    return(
        <div>
            <Hero />
            <Movies title="Popular Movies" movies={movies} />
        </div>
    )
}

export default PopularMovie;