import React from 'react'

export default props => (
  <nav className='navbar navbar-default"'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <a className='navbar-brand' href='#/todos'>
          <i className='fa fa-calendar-check-o' /> To Do
        </a>
      </div>
      <div>
        <ul className='nav navbar-nav navbar-right'>
          <li>
            <a href='#/todos'>Todos</a>
          </li>
          <li>
            <a href='#/about'>About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
