import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { userLoginStartAsync } from '../../redux/user/user.action';

const LoginPage = (props) => {
  
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { currentUser, error } = userLogin

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLoginStartAsync(username, password))
  }

  return (
    <Container>
      {
        currentUser ? (
          <h2>You're logged in</h2>
        ) : (
          <div>
            <h2 className='mt-5'>Login</h2>
            <div className='my-3 py-5'>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter username'
                    name='username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Enter password'
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        )
      }
      

      { 
        error ? (
          <Alert variant='danger'>{error}</Alert>
        ) : null
      }
      
    </Container>
  )
}



export default LoginPage

