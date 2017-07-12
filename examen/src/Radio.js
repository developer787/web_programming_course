import React, {Component} from 'react'
import './Radio.css'
class Radio extends Component {
  render(){
    return (
      <div>
      <input type="radio" 
	id="radio_standard" 
	name="radio-group"/>
      <label for="radio_standard">Ro</label>
      </div>
    )
  }
}
export default Radio
