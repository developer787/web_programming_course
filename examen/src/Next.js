import React from 'react'
class Next extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
    alert('this is: ' +  this.selection)
  }

  render() {
    const disabled = false
    return (
      <button onClick={this.handleClick} disabled={disabled}>
      Next
      </button>
    )
  }
}
export default Next
