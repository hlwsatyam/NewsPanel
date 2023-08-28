import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewsHubHome from './Components/NewsHubHome'
import NewsApiHandler from './Util/NewsApiHandler'
import Login from './auth/Login'
import Resigstration from './auth/Resigstration'
import ShowUserWithSaveArticle from './auth/ShowUserWithSaveArticle'
import SavedArticles from './auth/SavedArticles'
function App() {

  const lcid = localStorage.getItem("id")

  useEffect(() => {
    if (lcid == null) {
      setxlog(true)
    } else {
      setxlog(true)
    }
  })


  const [xlog, setxlog] = useState(false)
  const [EmailForArticle, setEmailForArticle] = useState("")



  return (
    <div>
      <Router>
        <div className='fixed-nav'>
          <div id='nav'>    <Navbar /> </div>
          <div id='nav-2'   ><ShowUserWithSaveArticle />  </div>
        </div>
        <div className='child-area'  > <Routes>
          <Route exact path='/*' element={
            (xlog) ? (<NewsHubHome EmailForArticle={EmailForArticle} />) : (<Login setEmailForArticle={setEmailForArticle} xlog={xlog} setxlog={setxlog} />)
          } />
          <Route path='/Genral' element={
            (xlog) ? (<NewsApiHandler EmailForArticle={EmailForArticle} cat="general" />) : (<Login setEmailForArticle={setEmailForArticle} xlog={xlog} setxlog={setxlog} />)
          } />
          <Route path='/Business' element={
            (xlog) ? (<NewsApiHandler EmailForArticle={EmailForArticle} cat="business" />) : (<Login setEmailForArticle={setEmailForArticle} xlog={xlog} setxlog={setxlog} />)
          } />
          <Route path='/Politics' element={(xlog) ? (<NewsApiHandler EmailForArticle={EmailForArticle} cat="politics" />) : (<Login setEmailForArticle={setEmailForArticle} xlog={xlog} setxlog={setxlog} />)} />
          <Route path='/Health' element={(xlog) ? (<NewsApiHandler EmailForArticle={EmailForArticle} cat="health" />) : (<Login setEmailForArticle={setEmailForArticle} xlog={xlog} setxlog={setxlog} />)} />
          <Route path='/Science' element={(xlog) ? (<NewsApiHandler EmailForArticle={EmailForArticle} cat="science" />) : (<Login setEmailForArticle={setEmailForArticle} xlog={xlog} setxlog={setxlog} />)} />
          <Route path='/Sport' element={(xlog) ? (<NewsApiHandler EmailForArticle={EmailForArticle} cat="sport" />) : (<Login setEmailForArticle={setEmailForArticle} xlog={xlog} setxlog={setxlog} />)} />
          <Route path='/Technology' element={(xlog) ? (<NewsApiHandler EmailForArticle={EmailForArticle} cat="technology" />) : (<Login setEmailForArticle={setEmailForArticle} xlog={xlog} setxlog={setxlog} />)} />
          <Route path='/register' element={<Resigstration setEmailForArticle={setEmailForArticle} xlog={xlog} setxlog={setxlog} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/savedArticle' element={<SavedArticles EmailForArticle={EmailForArticle} />} />
        </Routes> </div>
      </Router>
    </div>
  )
}
export default App