// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(() => {
      console.log('Randon Number')
      return {count: Math.ceil(Math.random() * 100)}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button className="button" type="button" onClick={this.onIncrement}>
              Generate
            </button>
          </div>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
