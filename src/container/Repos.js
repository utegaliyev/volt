// modules/Repos.js
import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
            <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
            <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
        {/* will render `Repo.js` when at /repos/:userName/:repoName */}
        {this.props.children}
      </div>
    )
  }
})
