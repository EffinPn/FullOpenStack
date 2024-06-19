import { useState } from 'react'

const Button = (props) => {
  return(
  <button onClick={props.onClick}>
  {props.text}
  </button>
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
      
      <h1>statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good + bad + neutral}</p>
      <p>Average: {((good * 1) + (neutral * 0) + (bad * -1)) / (good + bad + neutral)}</p>
      <p>Positive: {good + neutral + bad > 0 ? (good / (good + neutral + bad) * 100).toFixed(2) : 0}%</p>
    </div>
  )
}

export default App