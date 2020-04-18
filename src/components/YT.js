import React from "react";

const YT = ({ youtube, title }) => {
  return (
    <iframe
      width="560"
      height="315"
      className="responsive_yt"
      title={title}
      src={`https://www.youtube.com/embed/${youtube}`}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  );
};

export default YT;
