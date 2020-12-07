import React from "react";
import tim_1 from "../../static/images/tim_portfolio_1.JPG";

class HomeContent extends React.Component {
  renderContent() {
    const { content } = this.props;
    if (content.position === "right") {
      return (
        <div className="row">
          <div className="one wide column"></div>
          <div className="six wide column">
            <h1 className="ui header center aligned">
              {content.title}
              <div className="sub header">{content.body}</div>
            </h1>
          </div>
          <div className="one wide column"></div>
          <div className="eight wide column">
            <img className="ui rounded image" src={content.image}></img>
          </div>
        </div>
      );
    }
    return (
      <div className="row">
        <div className="eight wide column">
          <img className="ui rounded image" src={content.image}></img>
        </div>
        <div className="one wide column"></div>
        <div className="six wide column">
          <h1 className="ui header center aligned">
            {content.title}
            <div className="sub header">{content.body}</div>
          </h1>
        </div>
        <div className="one wide column"></div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="ui grid middle aligned">{this.renderContent()}</div>
      </div>
    );
  }
}

export default HomeContent;
