import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './blog.css'



const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            marginTop: '15px'
        }}
    />
)

class BlogListItem extends Component {

    render() {
        const {
            category,
            name,
            description,
            image
        } = this.props;
        
        return (
            <div>
                <div>
                 <img src={image} alt={name} className="blog_image"/>
                </div>
                <div className="category">{category}</div>
                <div className="red_title">{name}</div>
                <ColoredLine color="rgb(209, 127, 127)"/>
                <div className="text_item">{description}</div>
                <button className="btn" id="btn-place"> Read more </button>
    
            </div>
        )
    }
}

BlogListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
}


export default BlogListItem

