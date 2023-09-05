import React from 'react'
import NewsApiHandler from '../Util/NewsApiHandler'

function NewsHubHome({ EmailForArticle }) {
    return (
        <div  data-aos="zoom-out-up" >
            <NewsApiHandler EmailForArticle={EmailForArticle} />
        </div>
    )
}

export default NewsHubHome