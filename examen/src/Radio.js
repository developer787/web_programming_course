import React, {Component} from 'react'
import './Radio.css'
class Radio extends Component {
  constructor(props){
    super(props)
    this.value = props
    this.state = {
      check:false,
    }
    this.check=this.check.bind(this)
  }
  check(e){
    //e.preventDefault()
    this.setState({check:true})
    alert(this.state.check)
  }
  render(){
    return (
      <div className='radio_group'>
	<label >
	  <input type="radio" 
	    checked={this.state.check}
	    className="radio_standard" 
	    name="radio_group"/>
	  <div onClick={this.check}className="check"></div>
	</label>
      </div>
    )
  }
}
export default Radio
