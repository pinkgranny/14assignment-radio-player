import React from "react"
import Radio from "./radio"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      radioChannel: []
    }
  }
  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      console.log(json.channels)
      this.setState({
        radioChannel: [json.channels[1], json.channels[2], json.channels[18],
          json.channels[28], json.channels[29], json.channels[30],
          json.channels[32], json.channels[33], json.channels[34],
          json.channels[36], json.channels[48], json.channels[49], json.channels[54]]
      })
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1 id="header">Swedish Radio Stations</h1>
        </header>

        <div className="channel-container">
          {this.state.radioChannel.map((item) => {
            return <Radio key={item.id}
              image={item.image}
              name={item.name}
              tagline={item.tagline}
              color={item.color}
              url={item.liveaudio.url}
            />
          })}
        </div>
      </div>
    )
  }
}

export default App
