import * as React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const routes = this.props.routes
    return (
      <div>
        <Link to='/production'>Home</Link>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </div>
    )
  }
}

export default Index
