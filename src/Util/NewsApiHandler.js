import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './NewsApiHandler.css'
import { useSelector } from "react-redux"
function NewsApiHandler({ cat, }) {
    const [data, setdata] = useState([])
    const id = useSelector((s) => s)
    const NewsHandler = async () => {
        await axios.get(
            /* older Api:newsApi */

            // cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=aaf76459f2f14dc89f8c7c1082e09fb3`
            //     : "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=aaf76459f2f14dc89f8c7c1082e09fb3"

            //  new Api: Gnews 

            cat ? `https://gnews.io/api/v4/search?q=${cat}&lang=en&country=in&max=10&apikey=269f977595889b5ca9a4fee64ddeda23`
                : "https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=269f977595889b5ca9a4fee64ddeda23"

        ).then((data) => {
            setdata(data.data.articles)
        })
    }
    useEffect(() => {
        NewsHandler()
    }, [cat])


    const savedArticle = async (article, title) => {

        await axios.post(`https://newsbackend-satyam.onrender.com/save`, { article, id, title }).then((data) => {
            // await axios.post(`http://localhost:5000/save`, { article, id, title }).then((data) => {
            console.log(data.data)
        })

    }

    return (
        <div>
            <div className="container-md p-4 box " data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"  >
                {
                    (data) ? (data.map((item, id) => <div class="card  mt-5 item" data-aos="fade-up-right"  >
                        <img src={item.image} data-aos="zoom-in-left" class="card-img-top" alt="Img src Not Found" />
                        <div class="card-body" data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"  >
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.content}</p>
                            <p class="card-text">{item.description}</p>
                            <a href={item.url} target='_blank' class="btn btn-primary">Details...</a>
                            <a onClick={() => savedArticle(item.url, item.title)} target='_blank' class="btn btn-warning mx-5 ">save</a>
                        </div>
                    </div>)) : <h1>Loading....</h1>
                }
            </div>
        </div>
    )
}
export default NewsApiHandler