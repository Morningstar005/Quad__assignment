import React, { useEffect, useState } from "react";
// import MovieFetch from "../hooks/MovieFetch"
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./app.scss";
import pixel from "../assests/pexels-alex-andrews-1983037.jpg"
const MovieDetails = () => {


  const { id } = useParams();
  const [allMovie, setAllMovie] = useState([]);
  // const [loading, setLoading] = useState(false);

  async function fetchData() {
    // setLoading(true)
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    setAllMovie(data);
    // setLoading(false)

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
   (
        <>
          <div
            className="banner"
            style={{ backgroundImage: `url(${allMovie?.image?.original || pixel})` }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img mr-6"
                style={{ backgroundImage: `url(${allMovie?.image?.medium || pixel})` }}
              ></div> 
            </div>
            <div className="movie-content__info ">
              <div className="title text-white">{allMovie.name}</div>
              <div className="genres justify-center">
                {allMovie?.genres?.map((tag)=>(
                  <p className="text-white font-semibold text-start m-2 -mb-2 ">{tag} </p>
                ))}
            
              </div>
              <p className="text-white">{allMovie?.summary?.replace(/<[^>]*>?/gm, "")}</p>
              <div className="premiered">
                <p className="text-white font-semibold text-start"> Premiered: {allMovie.premiered}</p>
               
               
              </div>
              <div className="text-white ">
              <span className="text-gray-800 dark:text-white font-semibold" >Rating:  </span> <span className="font-bold text-gray-800 dark:text-white ">{allMovie.rating?.average ||"Null"}</span>
              </div>
              <div>
  
                <Link to={"/login"}> 
                <button className="btn_styling">
                  BOOK YOU SHOW
                  </button></Link>
              </div>
            </div>

          </div>
        </>
      )
  );
};

export default MovieDetails;
