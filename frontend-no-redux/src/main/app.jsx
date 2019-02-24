// Bootstrap
import 'modules/bootstrap/dist/css/bootstrap.min.css'
// Font Awesome
import 'modules/font-awesome/css/font-awesome.min.css'
// Custom CSS
import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
  <div className='container'>
    <Menu />
    <Routes />
  </div>
)
