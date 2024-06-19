import { useState } from 'react'

const Button = (props) => {

  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const max = anecdotes.length
  const random = Math.floor(Math.random() * max)
  

  const [votes,setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,

  });
  
  const handleVote = () => {
    setVotes({ ...votes, [selected]: votes[selected] + 1})
  }


  console.log(random);
  console.log(votes);

  const largestVote = () => {
    let largest = 0;
    let largestIndex = 0;
    for(let i in votes){
      if(votes[i] > largest){
        largest = votes[i];
        largestIndex = i;
      }

    }
    return largestIndex;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button onClick={() => setSelected(random)} text='Next anecdote' />
      <Button onClick={handleVote} text='Vote' />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[largestVote()]}</p>

    </div>
  )
}


export default App