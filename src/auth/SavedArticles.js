import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Auth.css'
function SavedArticles({ EmailForArticle }) {
    const [Articles, setArticles] = useState([])
 
    const lcid = localStorage.getItem("id")

    useEffect(() => {

        if (lcid !== null) {
            const fetchData = async () => {
                await axios.post("https://newsbackend-satyam.onrender.com/artices", { EmailForArticle }).then((res) => {
                // await axios.post("http://localhost:5000/artices", { EmailForArticle, id: lcid }).then((res) => {
                    setArticles(res.data)
                    // console.log(res.data)
                })
            }
            fetchData()
        }
    })
    return (
        <div>
            <div className="container-md">
                <div className="row">
                    <div className="display-1 mt-5 w-100 text-center ">
                        Saved Articles
                    </div>
                    {
                        Articles.map((i, ind) => <div class="card" >

                            <div class="card-body">
                                <h5 class="card-title">{ind + 1}</h5>
                                <p class="card-text">{i}</p>
                                <a href={i} class="btn btn-primary">Go </a>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
export default SavedArticles