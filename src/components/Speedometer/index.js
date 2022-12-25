// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}
  onAccelerate = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count + 10}))
    } else if (count === 200) {
      this.setState(prevState => ({count: 0}))
    }
  }
  onBrake = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count - 10}))
    } else if (count === 200) {
      this.setState(prevState => ({count: 0}))
    }
  }
  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="small-heading">Speed is {count}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="accelerate" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="brake" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
