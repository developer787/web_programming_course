import React, { Component } from 'react'
import Highlight from 'react-highlight'
import './Questions.css'
import Examen from './Examen_Javascript'
import Radio from './Radio'
import Next from './Next'
import {connect} from "react-redux";

const mapState = state => ({
      data : state.quizReducer.data
});

class Questions extends Component {
  componentDidMount(){
    console.log(Examen[0].pregunta)
  }
  render() {
    const {data} = this.props
    let i = randomIntFromInterval(0, Examen.length - 1) 
    const pregunta = Examen[i].pregunta
    const respuesta = Examen[i].respuesta
    const a = Examen[i].a
    const b = Examen[i].b
    const c = Examen[i].c
    const d = Examen[i].d
    return (
      <div className = "Questions">
          <h1> Test: {data}</h1>
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
	    </tbody>
	  </table>
	  <br />
	<Next />
      </div>
  )
  }
}
function randomIntFromInterval(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
export default connect(mapState)(Questions) 
