import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import MovieDetails from "./pages/MovieDetails"
import Login from "./pages/Login"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/MovieInfo/:id' element={<MovieDetails/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App