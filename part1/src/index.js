import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Hello = ({ name, age }) => {
  
  const bornYear = () => new Date().getFullYear() - age
  
  return (
    <div>
      <p>Hello {name} and you are {age}!</p>
      <p>So you were probaly born in {bornYear()}</p>
    </div>
  )
}

const App = (props) => {
  const name = 'Dan'
  const age = 33
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const reset = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <>
      <h1>Greetings</h1>
      
      <Hello name={name} age={age} />
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="One More" />
      <Button handleClick={reset} text="Back To Zero" />
      <Button handleClick={decreaseByOne} text="One Less" />
    </>
  )
}

const Display = ({ counter }) => <div>{counter}</div>
  

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
