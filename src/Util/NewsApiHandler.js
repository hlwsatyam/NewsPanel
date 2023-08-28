import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './NewsApiHandler.css'
function NewsApiHandler({ cat, EmailForArticle }) {


    const lcid = localStorage.getItem("id")

    const [data, setdata] = useState([])
    const NewsHandler = async () => {
        await axios.get(
            /* older Api:newsApi */

            cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=aaf76459f2f14dc89f8c7c1082e09fb3`
                : "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=aaf76459f2f14dc89f8c7c1082e09fb3"

            //  new Api: Gnews 

            // cat ? `https://gnews.io/api/v4/search?q=${cat}&lang=en&country=in&max=10&apikey=269f977595889b5ca9a4fee64ddeda23`
            //     : "https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=269f977595889b5ca9a4fee64ddeda23"

        ).then((data) => {
            setdata(data.data.articles)
        })
    }
    useEffect(() => {
        NewsHandler()
    }, [cat])



    const savedArticle = async (article) => {

        if (lcid == null) {
            return alert("Please Login To Save It")
        }

        // console.log(EmailForArticle)
        await axios.post(`https://newsbackend-satyam.onrender.com/save`, { id: lcid, article: article, email: EmailForArticle }).then((data) => {
        // await axios.post(`http://localhost:5000/save`, { id: lcid, article: article, email: EmailForArticle }).then((data) => {
            console.log(data.data)
        })

    }

    return (
        <div>
            <div className="container-md p-4 box ">
                {
                    (data) ? (data.map((item, id) => <div class="card  mt-5 item" >
                        {/* <img src={item.image} class="card-img-top" alt="Img src Not Found" /> */}
                        <img src={item.urlToImage} class="card-img-top" alt="Img src Not Found" />
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.content}</p>
                            <p class="card-text">{item.description}</p>
                            <a href={item.url} target='_blank' class="btn btn-primary">Details...</a>
                            <a onClick={() => savedArticle(item.url)} target='_blank' class="btn btn-warning mx-5 ">save</a>
                        </div>
                    </div>)) : <h1>Loading....</h1>
                }
            </div>
        </div>
    )
}
export default NewsApiHandler