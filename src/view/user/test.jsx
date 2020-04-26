import * as React from 'react'

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  setName = () => {
    this.setState({
      name: 'icepy' 
    })
  }
  render() {
    return <div>1222211111</div>
  }
}

export default Test
