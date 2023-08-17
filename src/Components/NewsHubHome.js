import React from 'react'
import NewsApiHandler from '../Util/NewsApiHandler'

function NewsHubHome({ EmailForArticle }) {
    return (
        <div>
            <NewsApiHandler EmailForArticle={EmailForArticle} />
        </div>
    )
}

export default NewsHubHome