import React, { Component } from 'react'
import './Questions.css'
import Examen from './Examen_Javascript'
import Radio from './Radio'
import Next from './Next'
import {connect} from "react-redux"

let i = randomIntFromInterval(0, Examen.length - 1) 
const mapState = state => ({
      i: i,
      quizCount: state.quizReducer.quizCount,
      data : state.quizReducer.data
});
const mapDispatchToProps = (dispatch) => {
  return {
    addQuiz: ()=>{
      dispatch({
	type: 'ADD_QUIZ'
      })
    },
    onIncrement: () => {
      dispatch({
	type: 'PLUS_FIVE'           
      })            
    },
    onDecrement: () => {
      dispatch({
	type: 'MINUS_FIVE'     
      })            
    }
  }
}
class Questions extends Component {
  componentDidMount(){
    console.log(Examen[0].pregunta)
  }
  render() {
    const {
      i, quizCount, data, 
      onIncrement, onDecrement, addQuiz} = this.props
    const pregunta = Examen[i].pregunta
//    const respuesta = Examen[i].respuesta
    const a = Examen[i].a
    const b = Examen[i].b
    const c = Examen[i].c
    const d = Examen[i].d
    return (
      <div className = "Questions">
          <h4> count: {quizCount}</h4>
          <h1> Test: {data}</h1>
	  <button onClick={onIncrement}>+</button>
          <button onClick={onDecrement}>-</button>
	  <h2>Examen Javascript</h2>
	  <h4>1. {pregunta}</h4>
	  <table>
	    <tbody>
	      <tr>
		<td>
		  <Radio value={'a'}/>
		</td>
		<td>
		  <span>{a}</span>
		</td>
	      </tr>
	      <tr>
		<td>
		  <Radio />
		</td>
		<td>
		  <span>{b}</span>
		</td>
	      </tr>
	      <tr>
		<td>
		  <Radio />
		</td>
		<td>
		  <span>{c}</span>
		</td>
	      </tr>
	      <tr>
		<td>
		  <Radio />
		</td>
		<td>
		  <span>{d}</span>
		</td>
	      </tr>
	    </tbody>
	  </table>
	  <br />
	<Next addQuiz={addQuiz}/>
      </div>
  )
  }
}
function randomIntFromInterval(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
export default connect(mapState, mapDispatchToProps)(Questions) 
