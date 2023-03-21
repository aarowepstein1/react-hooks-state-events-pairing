import React from "react";

function LikeButtons({ handleDislikes, handleLikes, likes, dislikes }) {
    return (
        <div>
            <button onClick={handleLikes} className="likes">{likes}👍</button>
            <button onClick={handleDislikes} className="dislikes">{dislikes}👎</button>
        </div>
    )
}

export default LikeButtons