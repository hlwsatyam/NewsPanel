import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from "react-redux"
import './Auth.css'
function SavedArticles() {
    let id = useSelector((s) => s)
    const [Articles, setArticles] = useState([])
    useEffect(() => {
        if (id != null) {
            const fetchData = async () => {
                await axios.post("https://newsbackend-satyam.onrender.com/artices", { id }).then((res) => {
                // await axios.post("http://localhost:5000/artices", { id }).then((res) => {
                    setArticles(res.data)
                   
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
                                <p class="card-text">{i.article}</p>
                                <h3 class="card-text ">{i.title}</h3>
                                <a href={i.article} target="_blank" class="btn btn-primary">Go </a>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
export default SavedArticles