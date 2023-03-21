import React from "react";

function Description({ video }) {
    const title = video.title;
    const views = video.views;
    const dateUploaded = video.createdAt;
    
    return (
        <div>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {dateUploaded}</p>
        </div>
    );
}

export default Description