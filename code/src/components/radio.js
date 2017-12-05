import React from "react"

class Radio extends React.Component {
  render() {
    return (
      <div className="channel-item-holder" style={{ backgroundColor: `#${this.props.color}` }}>
        <div className="pic">
          <img src={this.props.image} alt="" />
          {/* <div className="radiostation-content"> */}
        </div>
        <div className="text">
          <ul className="description">
            <li><h2>{this.props.name} </h2></li>
            <li><p>{this.props.tagline}</p></li>
          </ul>
          <ul className="audio">
            <li><audio controls>
              <source src={this.props.url} />
            </audio></li>
          </ul>

        </div>

        {/* </div> */}
      </div>
    )
  }
}

export default Radio
