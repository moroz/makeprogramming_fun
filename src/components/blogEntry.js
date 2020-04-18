import React from "react";
import { Link } from "gatsby";
import YT from "./YT";

const BlogEntry = ({ title, date, slug, excerpt, youtube }) => {
  const path = `/posts/${slug}`;
  return (
    <div className="blog_feed__entry" key={slug}>
      <p className="blog_feed__entry__meta">
        <span className="blog_feed__entry__type">
          {youtube ? "Video" : "Article"}{" "}
        </span>
        <span className="blog_feed__entry__date">{date}</span>
      </p>
      <Link className="blog_feed__entry__title" to={path}>
        {title}
      </Link>
      {youtube ? (
        <YT title={title} youtube={youtube} />
      ) : (
        <p className="blog_feed__entry__excerpt">{excerpt}</p>
      )}
      <p>
        <Link to={path}>Read article</Link>
      </p>
    </div>
  );
};

export default BlogEntry;
