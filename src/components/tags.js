import React from "react";

const Tags = ({ tags }) => {
  if (!tags) return null;
  return (
    <div className="tags">
      <span className="tags__label">Tags:</span>
      {tags.map((tag, index) => {
        return (
          <span className="tags__tag" key={index}>
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
