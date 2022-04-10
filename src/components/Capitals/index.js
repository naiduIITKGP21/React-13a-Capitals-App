import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    const {value} = event.target
    this.setState({activeCapitalId: value})
  }

  getCountryAndCapital = activeCapitalId => {
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachObject => eachObject.id === activeCapitalId,
    )
    return activeCountryAndCapital
  }

  render() {
    const {activeCapitalId} = this.state
    const {country} = this.getCountryAndCapital(activeCapitalId)
    console.log(country)
    console.log(activeCapitalId)

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachObject => (
                <option
                  className="option"
                  key={eachObject.id}
                  value={eachObject.id}
                >
                  {eachObject.capitalDisplayText}
                </option>
              ))}
            </select>
            <span className="question">is capital of which country?</span>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
