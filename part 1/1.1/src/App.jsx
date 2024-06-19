const Header = () => {
  const course = 'Half Stack application development'
  return (
  <h1>{course}</h1>
)
}

const Content = (props) => {

  return (
    <>
  <p>
    {props.partone} {props.exercises1}
  </p>
  <p>
    {props.parttwo} {props.exercises2}
  </p>
  <p>
    {props.partthree} {props.exercises3}
  </p>
  </>
  )
}

const Total = (props) => {

  return(
    <>
    <p>Number of exercises: {props.num1 + props.num2 + props.num3}</p>
    </>
  )

}

const App = () => {

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header />
      <Content partone={part1} exercises1={exercises1}/>
      <Content parttwo={part2} exercises2={exercises2}/>
      <Content partthree={part3} exercises3={exercises3}/>
      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
    </div>
  )
}

export default App