import React from "react";
const BlogCard = (props) => {
    return (
    <div className="BlogCard" key={props.id}>
        <h3>{props.title} {props.id}</h3>
        <p>{props.description}</p>
    </div>
    )
}

export default BlogCard;