import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = ((good - bad) / all).toFixed(1)
  const positive = ((good / all) * 100).toFixed(1)

  if (good === 0 && neutral === 0 && bad === 0){
    return (
      <>
      <h1>statistics</h1>
      <p>No feedback given.</p>
      </>
    )
  }
  return (
    <>
    <h1>statistics</h1>
    <table>
      <tr>
        <Statistic text='good' value={good} />
      </tr>
      <tr>
        <Statistic text='neutral' value={neutral} />
      </tr>
      <tr>
        <Statistic text='bad' value={bad} />
      </tr>
      <tr>
        <Statistic text='all' value={all} />
      </tr>
      <tr>
        <Statistic text='average' value={average} />
      </tr>
      <tr>
          <Statistic text='positive' value={positive + '%'} />
      </tr>
    </table>
    </>
  )
}

const Statistic = ({ text, value}) => 
  <><td>{text}</td><td>{value}</td></>

const Button = ({ onClick, text }) => 
  <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)  
  const badClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button onClick={goodClick} text="good"/>
      <Button onClick={neutralClick} text="neutral" />
      <Button onClick={badClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)