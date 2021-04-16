import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

import { userLogout } from '../../redux/user/user.action';


const Header = () => {
  
  const dispatch = useDispatch()

  const userLogin = useSelector( state => state.userLogin)
  const { currentUser }  = userLogin

  const logout = () => {
    dispatch(userLogout())
    console.log('logout')
    window.location = '/'
  }

  return (
    
      <Navbar expand="lg" bg='primary' variant='dark'>
        <Container>

          <LinkContainer to='/'>
            <Navbar.Brand>Checkout App</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="ml-auto">
              

              <LinkContainer to='/checklist'>
                <Nav.Link>
                  CheckList Controller
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/checklist-item'>
                <Nav.Link>
                  Checklist Item Controller
                </Nav.Link>
              </LinkContainer>

              {
                currentUser ? (
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                ) : (
                  <LinkContainer to='/register'>
                    <Nav.Link>
                      Register
                    </Nav.Link>
                  </LinkContainer>
                )
              }
              

            </Nav>
              
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}

export default Header