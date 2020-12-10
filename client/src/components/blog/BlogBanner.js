import React from "react";
import blogPhoto from "../../static/images/blogBanner.jpg";

class BlogBanner extends React.Component {
  render() {
    return (
      <div className="blog-banner">
        <img
          className="ui image blog-banner-image"
          src={blogPhoto}
          alt="blog banner"
        ></img>
        <div className="image-overlay"></div>
        <h1 className="blog-banner-title">BLOG</h1>
      </div>
    );
  }
}

export default BlogBanner;
