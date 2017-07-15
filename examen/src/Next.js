import React from 'react'
class Next extends React.Component {
  constructor(props){
    super(props)
    this.addQuiz = props.addQuiz
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
    this.addQuiz()
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
