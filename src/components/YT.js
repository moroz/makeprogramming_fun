import React from "react";

const YT = ({ youtube, title }) => {
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
};

export default YT;
