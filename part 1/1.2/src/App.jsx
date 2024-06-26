const Header = () => {
  const course = 'Half Stack application development'
  return (
  <h1>{course}</h1>
)
}

const Part = (props) => {

return(
<p>
  {props.part} {props.exercises}
</p>
  )
}


const Content = (props) => {

  return (
  <>
<Part part={props.part1} exercises={props.exercises1}/>
<Part part={props.part2} exercises={props.exercises2}/>
<Part part={props.part3} exercises={props.exercises3}/>
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
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
    </div>
  )
}

export default App