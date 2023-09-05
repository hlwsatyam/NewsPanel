import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewsHubHome from './Components/NewsHubHome'
import NewsApiHandler from './Util/NewsApiHandler'
import Login from './auth/Login'
import Resigstration from './auth/Resigstration'
import ShowUserWithSaveArticle from './auth/ShowUserWithSaveArticle'
import SavedArticles from './auth/SavedArticles'
import { useSelector } from "react-redux"
function App() {
  
  const id = useSelector((s) => s)
  return (
    <div>
      <Router>
        <div className='fixed-nav'  data-aos="fade-up"
     data-aos-anchor-placement="top-center"   >
          <div  id='nav'>    <Navbar /> </div>
          <div id='nav-2'   ><ShowUserWithSaveArticle />  </div>
        </div>
        <div className='child-area'  > <Routes>
          <Route exact path='/*' element={
            (id) ? (<NewsHubHome />) : (<Login />)
          } />
          <Route path='/Genral' element={
            (id) ? (<NewsApiHandler cat="general" />) : (<Login />)
          } />
          <Route path='/Business' element={
            (id) ? (<NewsApiHandler cat="business" />) : (<Login />)
          } />
          <Route path='/Politics' element={(id) ? (<NewsApiHandler cat="politics" />) : (<Login />)} />
          <Route path='/Health' element={(id) ? (<NewsApiHandler cat="health" />) : (<Login />)} />
          <Route path='/Science' element={(id) ? (<NewsApiHandler cat="science" />) : (<Login />)} />
          <Route path='/Sport' element={(id) ? (<NewsApiHandler cat="sport" />) : (<Login />)} />

          <Route path='/Technology' element={(id) ? (<NewsApiHandler cat="technology" />) : (<Login />)} />

          <Route path='/register' element={<Resigstration />} />

          <Route path='/login' element={<Login />} />

          <Route path='/savedArticle' element={<SavedArticles />} />
        </Routes> </div>
      </Router>
    </div>
  )
}
export default App