import React from 'react'
class Next extends React.Component {
  constructor(props){
    super(props)
    this.selection = 'A'
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
    alert('this is:', this.selection)
  }

  render() {
    return (
      <button onClick={this.handleClick}>
      Next
      </button>
    )
  }
}
export default Next
