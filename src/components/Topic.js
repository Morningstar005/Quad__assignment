import React from "react";
import { NavLink } from "react-router-dom";
import pexels from "../assests/pexels-alex-andrews-1983037.jpg"
const Topic = ({ movie}) => {
 
  return (
    <tr>
    <td className="py-4 px-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="h-16 w-16 flex-shrink-0">
          <img
            src={movie.show?.image?.medium || pexels}
            alt=""
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900 dark:text-white">{movie.show.name}</div>
          <div className="text-sm font-thin text-gray-500 dark:text-white">{movie.show.type}</div>
        </div>
      </div>
    </td>
    <td className="px-12 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-white">
            {movie.show.genres.map((tags)=>(
                <p key={tags}>{tags}</p>
            ))}
        </div>
    </td>
    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
        {
            movie.show.language
        }
    </td>

    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
        <NavLink to={`/MovieInfo/${movie?.show?.id}`}>
        <button className="  rounded-md py-1.5 px-3.5 font-semibold bg-indigo-600 text-sm leading-7 text-white hover:bg-indigo-500">Explore Movie</button>
        </NavLink>
    </td>
  </tr>
 


  );
};

export default Topic;
