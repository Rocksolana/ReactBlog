import React from 'react'
import './content.css'

import contentimage from './divitheme-rebel-480x299.png'

const ContentImage = () => {
    return (
        <div>
           <img src={contentimage} alt="Logo" className="blog_image"/>
        </div>
    )
}
export default ContentImage