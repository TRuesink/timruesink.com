import React from "react";
import { Link } from "react-router-dom";

class ContentHighlight extends React.Component {
  renderButtons() {
    return this.props.content.buttons.map((button) => {
      return (
        <Link to={button.path} className="ui button">
          {button.label}
        </Link>
      );
    });
  }

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
              <div style={{ marginTop: "20px" }}>{this.renderButtons()}</div>
            </h1>
          </div>
          <div className="one wide column"></div>
          <div className="eight wide column">
            <img className="ui rounded image" src={content.image} alt=""></img>
          </div>
        </div>
      );
    }
    return (
      <div className="row">
        <div className="eight wide column">
          <img className="ui rounded image" src={content.image} alt=""></img>
        </div>
        <div className="one wide column"></div>
        <div className="six wide column">
          <h1 className="ui header center aligned">
            {content.title}
            <div className="sub header">{content.body}</div>
            <div style={{ marginTop: "20px" }}>{this.renderButtons()}</div>
          </h1>
        </div>
        <div className="one wide column"></div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="ui stackable grid middle aligned">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default ContentHighlight;
