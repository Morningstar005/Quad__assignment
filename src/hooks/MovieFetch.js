
import axios from "axios";
import { useEffect,useState } from "react";
const API_KEY="https://api.tvmaze.com/search/shows"

const MovieFetch=()=>{
    const [allMovie,setAllMovie]= useState([]);
    const [loading,setLoading] = useState(false);

    async function fetchData(){
        setLoading(true);
        const {data}= await axios.get(API_KEY+"?q=all")
      
        setAllMovie(data)
        setLoading(false)
    }


    useEffect(() => {
        fetchData();
      }, []);

      return{
        loading,fetchData,allMovie
      }
}

export default MovieFetch
