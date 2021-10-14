import React, {Fragment, Component } from 'react';
import './App.css';
import  Navbar from './components/layout/navbar'
import Users from './components/users/Users'
class App extends Component{

  render() {

  


  return (
    <Fragment>

      <Navbar title="Github Finder" icon='fab fa-github'/>
      <div className='container'>
      <Users />
      </div>
    </Fragment>
  );
  }
}

export default App;
