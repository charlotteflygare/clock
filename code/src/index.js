import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {

  state = {
    time: new Date()
  }

  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({
    time: new Date()
    })
  }

  render() {
    return (
      <div>
      <div className="Container">
        <div className="Clock">
          <h1>Hello, world!</h1>
          <h2>It is {this.state.time.toLocaleTimeString()}.</h2>
        <div className="Buttons">
          <button onClick={this.componentWillUnmount}>Pause me</button>
          <button onClick={this.componentDidMount}>Start me</button>
        </div>
      </div>
      </div>
      </div>

    )
  }

}

ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"))
