import React from "react";
import { Link } from "gatsby";

const Tags = ({ tags }) => {
  if (!tags) return null;
  return (
    <div className="tags">
      <span className="tags__label">Tags:</span>
      {tags.map((tag, index) => {
        const slug = tag.toLowerCase().replace(/\s/g, "-");
        return (
          <Link className="tags__tag" key={index} to={`/tags/${slug}`}>
            {tag}
          </Link>
        );
      })}
    </div>
  );
};

export default Tags;
