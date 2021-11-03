import React, {Fragment, Component } from 'react';
import  Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';
//make commit
class App extends Component{
  state = {
    users: [],
    loading: false
  }

  static propTypes ={
    searchUsers: PropTypes.func.isRequired
  }

  async componentDidMount(){
    this.setState({
      loading: true
    });


    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({
      users: res.data,
      loading: false
    })
    console.log(res.data)
  }

  //search github users
searchUsers = async text => {
  this.setState({loading: true})
  const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  this.setState({
    users: res.data.items,
    loading: false
  })
console.log("in app", text)
  }

clearUsers = () => this.setState({
users: [],
loading: false
})

  render() {

  return (
    <Fragment>

      <Navbar title="Github Finder" icon='fab fa-github'/>
      <div className='container'>
      <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}/>
      <Users loading={this.state.loading} users={this.state.users}/>
      </div>
    </Fragment>
  );
  }
}

export default App;
