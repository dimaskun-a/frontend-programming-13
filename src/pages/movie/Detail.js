import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail(){
    const params = useParams();
    const [movies,setMovies] = useState([]);
    
    useEffect(()=>{
        getRecomendationMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params.id])
    
    async function getRecomendationMovies(){
        const response = await axios(ENDPOINTS.RECOMMENDATIONS(params.id));

        setMovies(response.data.results);
    }

    return(
        <>
        <DetailMovie />
        <Movies title="Recommendation Movies" movies={movies} />
        </>
    )
}

export default Detail;