import React from "react"

class Radio extends React.Component {
  render() {
    return (
      <div className="channel-item-holder">
        <img src={this.props.image} alt="" />
        {/* <div className="radiostation-content"> */}
          <h2>{this.props.name} </h2>
          {this.props.tagline}
          {this.props.color}
        <audio controls>
          <source src={this.props.url} />
        </audio>

        {/* </div> */}
      </div>
    )
  }
}

export default Radio
