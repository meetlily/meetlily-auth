import React from "react";

class Card extends React.Component {
  render() {
    let color = this.props.backgroundColor;
    let scale = this.props.scale;
    return (
      <div
        style={{
          height: "382px",
          width: "270px",
          position: "absolute",
          top: "0px",
          borderRadius: "12px",
          backgroundColor: color,
          transform: `scale(${scale})`
        }}
      ></div>
    );
  }
}

export default Card;
