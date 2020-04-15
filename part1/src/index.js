import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} and you are {props.age}!</p>
    </div>
  )
}

const App = () => {
  const name = 'Dan'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name ="Leo" age={26 + 10}/>
      <Hello name={name} age={age} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
