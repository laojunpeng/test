import * as React from 'react'
import { Link } from 'react-router-dom'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  setName = () => {
    // this.setState({
    //   name: 'icepy'
    // })
    this.props.history.push('/user/test', { day: 'Friday' })
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <Link to='/user'>Home</Link>
        <div onClick={this.setName}> set name22222 </div>
        <div>{name}</div>
      </div>
    )
  }
}

export default Index
