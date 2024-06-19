import { useState } from 'react'

const Button = (props) => {
  return(
  <button onClick={props.onClick}>
  {props.text}
  </button>
)
}

const StatisticsLine = (props) => {
  return(
    <p>{props.text}{props.value}</p>
  )
}

const Statistics = (props) => {
  return(
  <div>
  
  <h1>Statistics</h1>
  <StatisticsLine text='Good:' value={props.good} />
  <StatisticsLine text='Neutral:' value={props.neutral} />
  <StatisticsLine text='Bad:' value={props.bad} />
  <StatisticsLine text='All:' value={props.good + props.bad + props.neutral} />
  <StatisticsLine text='Average:' value={((props.good * 1) + (props.neutral * 0) + (props.bad * -1)) / (props.good + props.bad + props.neutral)} />
  <StatisticsLine text='Positive:' value={props.good + props.neutral + props.bad > 0 ? (props.good / (props.good + props.neutral + props.bad) * 100).toFixed(2)+'%': '0%'} />

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

      {good > 0 || bad > 0 || neutral > 0 ? (
      <Statistics good={good} bad={bad} neutral={neutral} />) : <p>No feedback given</p>
      }

    </div>
  )
}

export default App