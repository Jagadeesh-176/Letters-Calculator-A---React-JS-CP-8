// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="main-container">
        <div className="first-con">
          <h1 className="head-1">Calculate the Letters you enter</h1>
          <label className="head-2" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            type="text"
            className="input"
            placeholder="Enter the phrase"
            id="phraseText"
            value={inputPhrase}
            onChange={this.onChangeInputPhrase}
          />
          <p className="para" type="button">
            No.of letters: {inputPhrase.length}
          </p>
        </div>
        <div className="second-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
