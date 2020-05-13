import React, { useState } from "react";

const YT = ({ youtube, title, defer }) => {
  const [visible, setVisible] = useState(!defer);
  const thumbnail = `https://img.youtube.com/vi/${youtube}/maxresdefault.jpg`;
  const showVideo = () => {
    setVisible(true);
  };
  if (visible)
    return (
      <div className="responsive_yt">
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${youtube}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    );
  return (
    <div className="responsive_yt placeholder">
      <a href={`https://www.youtube.com/watch/${youtube}`} target="_blank">
        <img
          src={thumbnail}
          alt=""
          onClick={showVideo}
          onMouseOver={showVideo}
          onFocus={showVideo}
        />
      </a>
    </div>
  );
};

export default YT;
