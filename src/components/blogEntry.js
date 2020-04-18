import React from "react";
import { Link } from "gatsby";

const BlogEntry = ({ title, date, slug, excerpt }) => {
  const path = `/posts/${slug}`;
  return (
    <div className="blog_feed__entry" key={slug}>
      <p className="blog_feed__entry__date">{date}</p>
      <Link className="blog_feed__entry__title" to={path}>
        {title}
      </Link>
      <p className="blog_feed__entry__excerpt">{excerpt}</p>
      <Link to={path}>Read article</Link>
    </div>
  );
};

export default BlogEntry;
