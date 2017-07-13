import React, {Component} from 'react'
import './Radio.css'
class Radio extends Component {
  render(){
    const label = 'a)'
    return (
      <div className='radio_group'>
      <label>
      <input type="radio" 
	className="radio_standard" 
	name="radio_group"/>
        <div className="check"></div>
      </label>
      </div>
    )
  }
}
export default Radio
