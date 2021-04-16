import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';

import Header from './components/Header/Header';

import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Checklist from './pages/Checklist/Checklist';

import './App.css';

const App = () => {
  return (
    <Router>
      <PersistGate persistor={ persistor }>
        <Header/>
        <Switch>
          <Route path='/' exact component={LoginPage}/>
          <Route path='/register' exact component={RegisterPage}/>
          <Route path='/checklist' exact component={Checklist}/>
        </Switch>
      </PersistGate>
    </Router>
  );
}

export default App;
