import * as React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
import store from '@/store'

const stateToProps = (state) => {
  return {
    name: state.name,
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = Object.assign(
      {},
      {
        routes: props.routes,
      },
      store.getState(),
    )
  }
  // public setName = () => {
  //   this.setState({
  //     name: 'icepy',
  //   })
  // }
  render() {
    // const { name } = this.state
    const routes = this.state.routes
    return (
      <div>
        <Link to='/production'>Home</Link>
        {/* <div onClick={this.setName}> set 111 </div>
        <div>{name}</div> */}
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </div>
    )
  }
}

export default connect(stateToProps, null)(Index)
// export default Index
