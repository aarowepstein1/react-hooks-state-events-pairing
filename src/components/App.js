import React, {useState} from "react";
import video from "../data/video.js";
import Description from "./Description.js";
import LikeButtons from "./LikeButtons.js";
import Comment from "./Comment.js";

function App() {
  const [likes, setLikes] = useState(9210);
  const [dislikes, setDislikes] = useState(185);
  const [hidden, setHidden] = useState(false)
  
  function handleLikes() {
    const newLikes = likes + 1;
    setLikes(newLikes);
  };
  function handleDislikes() {
    const newDislikes = dislikes + 1;
    setDislikes(newDislikes);
  };

  function handleClick() {
    setHidden(!hidden)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Description video={video}/>
      <LikeButtons handleDislikes={handleDislikes}
      handleLikes={handleLikes}
      likes={likes}
      dislikes={dislikes}
      />
      <button onClick={handleClick}>{hidden ? "Show Comments" : "Hide Comments"}</button>
      {hidden ? null : <Comment video={video} />}
    </div>
  );
}

export default App;
