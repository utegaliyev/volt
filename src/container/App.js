import React from 'react';
import Home from './Home';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

class App extends React.Component {

  render() {
    return (<div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLinkContainer to="/" activeHref="active">
              <NavItem>Invoice App</NavItem>
            </IndexLinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/products" activeHref="active">
            <NavItem eventKey={1}>Products</NavItem>
          </LinkContainer>
          <LinkContainer to="/customers" activeHref="active">
            <NavItem eventKey={2}>Customers</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>

        {/* add this */}
       {this.props.children|| <Home/>}
      </div>)
  }

}
export default App;
