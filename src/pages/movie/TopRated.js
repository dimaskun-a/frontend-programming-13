import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRatedMovie(){
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        getTopRatedMovies();
    },[])

    async function getTopRatedMovies(){
        //fecth data dengan axios
        const response = await axios(ENDPOINTS.TOP_RATED);

        //simpan data ke state
        setMovies(response.data.results)
    }

    return(
        <div>
            <Hero />
            <Movies title="Top Rated" movies={movies} />
        </div>
    )
}

export default TopRatedMovie;