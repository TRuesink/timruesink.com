import React from "react";
import BlogBanner from "./BlogBanner";
import ContentHighlight from "../home/ContentHighlight";
import PostList from "./PostList";
import { connect } from "react-redux";
import { fetchPosts, changeNav } from "../../actions";

import "../../static/css/blog.css";
import blog_1 from "../../static/images/backpacking_1.jpg";
import blog_2 from "../../static/images/backpacking_2.JPG";
import blog_3 from "../../static/images/backpacking_3.JPEG";

class BlogPage extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.changeNav("BLOG");
  }
  render() {
    if (this.props.topPosts.length === 0) {
      return <div>loading..</div>;
    }
    const { topPosts } = this.props;
    return (
      <div>
        <BlogBanner />
        <h1 className="ui horizontal section divider blog-divider">
          Featured Posts
        </h1>
        <ContentHighlight
          content={{
            title: topPosts[0].title,
            body: topPosts[0].body,
            image: blog_1,
            position: "right",
            buttons: [],
          }}
        />
        <div className="ui section divider"></div>
        <ContentHighlight
          content={{
            title: topPosts[1].title,
            body: topPosts[1].body,
            image: blog_2,
            position: "left",
            buttons: [],
          }}
        />
        <div className="ui section divider"></div>
        <ContentHighlight
          content={{
            title: topPosts[2].title,
            body: topPosts[2].body,
            image: blog_3,
            position: "right",
            buttons: [],
          }}
        />
        <h1 className="ui horizontal section divider blog-divider">
          Latest Posts
        </h1>
        <PostList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topPosts: Object.values(state.posts).filter((item) => item.id <= 3),
  };
};

export default connect(mapStateToProps, { fetchPosts, changeNav })(BlogPage);
