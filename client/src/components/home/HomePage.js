import React from "react";
import ContentHighlight from "./ContentHighlight";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";

// import images for HomeContent components
import tim_1 from "../../static/images/tim_portfolio_1.JPG";
import tim_2 from "../../static/images/tim_portfolio_2.JPG";
import blog_1 from "../../static/images/backpacking_1.jpg";
import blog_2 from "../../static/images/backpacking_2.JPG";
import blog_3 from "../../static/images/backpacking_3.JPEG";
import HomeTeaser from "./HomeTeaser";

const content_1 = {
  title: "Welcome!",
  body: `I'm glad you're here. I built this website to share things I'm interested in, and hear from you. Check out my blog for a window into my adventures, thoughts, hobbies, etc. Take a look at my projects if you're curious about my programming journey`,
  position: "right",
  image: tim_1,
  buttons: [
    { label: "Blog", path: "/blog" },
    { label: "Projects", path: "/projects" },
  ],
};

const content_2 = {
  title: "Nice to Meet Ya!",
  body: `My name is Tim and I am a self-taught coder. I'm also a mechanical engineer by training, a salesperson by trade, an outdoor enthusiast, and a lover of good beer and good friends.`,
  position: "left",
  image: tim_2,
  buttons: [{ label: "Connect", path: "/connect" }],
};

const blog_images = { 1: blog_1, 2: blog_2, 3: blog_3 };

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <ContentHighlight content={content_1} />
        <div className="ui section divider"></div>
        <ContentHighlight content={content_2} />
        <div className="ui section divider"></div>
        <HomeTeaser
          title="Blog"
          content={this.props.topPosts}
          images={blog_images}
        />
        <div className="ui section divider"></div>
        <HomeTeaser
          title="Projects"
          content={this.props.topPosts}
          images={blog_images}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topPosts: Object.values(state.posts).filter((item) => item.id <= 3),
  };
};

export default connect(mapStateToProps, { fetchPosts })(HomePage);
