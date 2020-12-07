import React from "react";

class HomeTeaser extends React.Component {
  renderCards() {
    const { content } = this.props;
    const { images } = this.props;
    return content.map((item) => {
      item.image = images[item.id];
      return (
        <div key={item.id} className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src={item.image}></img>
            </div>
            <div className="content">
              <div className="header">{item.title}</div>
              <div className="meta">
                <a>Backpacking</a>
              </div>
              <div className="description">{item.body}</div>
            </div>
            <div className="extra content">
              <span className="right floated">June 7, 2020</span>
              <span>
                <i className="user icon"></i>
                Tim Ruesink
              </span>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui container">
        <h1
          className="ui center aligned header"
          style={{ marginBottom: "30px" }}
        >
          {this.props.title}
        </h1>
        <div className="ui three column grid">{this.renderCards()}</div>
      </div>
    );
  }
}

export default HomeTeaser;
