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
        radioChannel: json.channels
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
