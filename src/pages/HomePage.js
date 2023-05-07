import React from "react";
import Spinner from "../components/Loader";
import Moviefetch from "../hooks/MovieFetch";
import Topic from "../components/Topic";
const HomePage = () => {
  const { loading, allMovie,MovieFetch } = Moviefetch();

  console.log(allMovie);

  return (
    <section className="container px-4 mx-auto py-4 ">
      <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium text-white dark:text-white">
              Movies
            </h1>
            <p
              className="mt-1 text-sm text-gray-500
                 dark:text-gray-300"
            >
              This is a list of all employees. You can add new employees, edit
              or delete existing ones.
            </p>
          </div>
        </div>

      <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-3.5 py-4 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Movies</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Genres
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Role
                      </th>
                      <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      explore More 
                    </th> 
                    </tr>
                  </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {
                    loading?(<Spinner/>):( 
                      
                      allMovie.map((movie)=>(
                      <Topic movie={movie} key={movie.show.id} MovieFetch={MovieFetch}/>
                    )))
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HomePage;
