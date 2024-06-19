import { useState } from 'react'

const Button = (props) => {
  return(
  <button onClick={props.onClick}>
  {props.text}
  </button>
)
}

const Statistics = (props) => {
  return(
  <div>
  
  <h1>statistics</h1>
  <p>Good: {props.good}</p>
  <p>Neutral: {props.neutral}</p>
  <p>Bad: {props.bad}</p>
  <p>All: {props.good + props.bad + props.neutral}</p>
  <p>Average: {((props.good * 1) + (props.neutral * 0) + (props.bad * -1)) / (props.good + props.bad + props.neutral)}</p>
  <p>Positive: {props.good + props.neutral + props.bad > 0 ? (props.good / (props.good + props.neutral + props.bad) * 100).toFixed(2) : 0}%</p>
  
  </div>
)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button onClick={() => setBad(bad + 1)} text='bad'/>

      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App