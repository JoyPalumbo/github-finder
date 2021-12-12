import React, {Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState'
import './App.css';

//trying to change to main
const App =() => {

  // const [user, setUser] = useState({})
  // const [repos, setRepos] = useState([])
  // const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)


  // static propTypes ={
  //   searchUsers: PropTypes.func.isRequired
  // }

  // async componentDidMount(){
  //   this.setState({
  //     loading: true
  //   });

// con
//     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//     this.setState({
//       users: res.data,
//       loading: false
//     })
//     console.log(res.data)
//   }

  //search github users
// const searchUsers = async text => {
//   setLoading(true)
//   const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//   setUsers(res.data.items)
//   setLoading(false)
// console.log("in app", text, alert)
//   }

// // Get gingle github user
// const getUser = async (username) => {
//   setLoading(true)
//   const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//   setUser(res.data)

//   setLoading(false)

// }

// const getUserRepos = async username => {
//   setLoading(true)
//   const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//  setRepos(res.data)
//   setLoading(false)
// }


const showAlert = (message, type) =>{
 setAlert(message, type)
  setTimeout(() => 
    setAlert(null), 5000)
}

  return (
    <GithubState> 
    <Router>
    <div className="App">
      <Navbar title="Github Finder" icon='fab fa-github'/>
      <div className='container'>
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/" render={props => (
            <Fragment>
                    <Search 

                    setAlert={showAlert}/>
      <Users />
            </Fragment>
          )}/>
         
         <Route exact path="/about" component={About}/>
         <Route exact path="/user/:login" component={User}/>
        </Switch>
      {/* <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false} setAlert={this.setAlert}/>
      <Users loading={loading} users={users}/> */}
      </div>
      </div>
      </Router>
      </GithubState>
  );
}

export default App;
