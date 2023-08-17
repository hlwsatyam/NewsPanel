import React from 'react'
import { Link } from 'react-router-dom'
function ShowUserWithSaveArticle() {
    return (
        <div>
            <Link to='/savedArticle'  ><i className='fa fa-save fa-3x m-1 '></i></Link>
        </div>
    )
}
export default ShowUserWithSaveArticle