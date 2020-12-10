import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";
import testImage from "../../static/images/backpacking_2.JPG";
import "../../static/css/blog.css";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    const posts = this.props.posts;
    return posts.map((post) => {
      return (
        <div className="item post-item">
          <img className="ui small image" src={testImage} alt=""></img>
          <div className="content">
            <a href="/" className="header">
              {post.title}
            </a>
            <div className="description">{post.body}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts).filter((item) => item.userId === 1),
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
