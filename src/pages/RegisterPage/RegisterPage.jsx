import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { userRegisterStartAsync } from '../../redux/user/user.action';

const RegisterPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const userRegister = useSelector(state => state.userRegister);
  const { isCreated, error } = userRegister

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userRegisterStartAsync({ username, email, password }));
  };

  return (
    <Container>
      <h2 className='mt-5'>Login</h2>
      <div className='my-3 py-5'>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

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

      { 
        error ? (
          <Alert variant='danger'>{error}</Alert>
        ) : null
      }
      
      { 
        isCreated ? (
          <Alert variant='success'>User created!</Alert>
        ) : null
      }

    </Container>
  )
}



export default RegisterPage

