// Write your code here
import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  clickMe = () => {
    this.setState(prevState => {
      console.log(`previous state count is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="para">click the button to increase the count!</p>
        <button className="button" onClick={this.clickMe} type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default Counter
