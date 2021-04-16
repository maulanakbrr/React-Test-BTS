import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

const Checklist = () => {
  const [checklist, setChecklist] = useState([]);
  const [name, setName] = useState('');

  const userLogin = useSelector(state => state.userLogin);
  const { currentUser } = userLogin
  const { data: userData  } = currentUser;

  const getChecklists = async () => {
    try {
        const { token } = userData;

        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
        };
        
        const { data } = await axios.get('http://18.139.50.74:8080/checklist', config)

        setChecklist(data.data);
        console.log(data);
        console.log(checklist);
    } catch (err) {
        console.error(err.message);
    }
  };

  useEffect(() => {
    getChecklists();
  },[]);

  const deleteChecklist = async (checklistId) => {
    try {
      const { token } = userData;

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      };
      
      const { data } = await axios.delete(`http://18.139.50.74:8080/checklist/${checklistId}`, config)

      setChecklist(data);
    } catch (err) {
        console.error(err.message);
    }
  };

  const inputChecklist = async (e) => {
    e.preventDefault();
    try {
      const { token } = userData;

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      };
  
      const { data } = await axios.post('http://18.139.50.74:8080/checklist', { name }, config)
      
    } catch (err) {
      console.error(err.message);
    }
  }

  return currentUser ? (
    <Container>
      <h2 className="text-center mt-5">Checklist Controller</h2>

      <div>
        <h4 className="text-center mt-5">Input Checklist</h4>
        <Form onSubmit={inputChecklist}>
          <Form.Group controlId="username">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter name'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      

      <table className="table mt-3 text-center">
          <thead className="thead-dark">
          <tr>
              <th>Name</th>
              <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          
              {
                checklist ? 
                checklist.map(item => (
                    <tr key={item.checklistId}>
                        <td>{item.name}</td>
                        <td>
                            <button 
                                className="btn btn-danger"
                                onClick={() => deleteChecklist(item.checklistId)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                )) : (
                  <h3>Data is empty</h3>
                )
              }
          </tbody>
      </table>
    </Container>
  ) : (
    <h2>Please login first at home</h2>
  );
}

export default Checklist;