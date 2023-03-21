import React from "react";

function Comment({ video }) {
    const comments = video.comments.map(commentObj => {
        return (<div key={commentObj.id}>
            <h3>{commentObj.user}</h3>
            <p>{commentObj.comment}</p>
        </div>)
    })
    
    return (
        <div>
            <h2>{video.comments.length} Comments</h2>
            {comments}
        </div>
    )
}

export default Comment