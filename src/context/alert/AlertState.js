import React, {useReducer} from 'react';
import axios from 'axios';
import alertContext from './alertContext';
import alertReducer from './alertReducer';                       
import {
 SET_ALERT,
 REMOVE_ALERT
} from '../types'

const AlertState = props => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

//   Set alert
const setAlert = (message, type) =>{
    dispatch({
        type: SET_ALERT,
        payload: {message, type}
    })
    setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000)
    // setAlert(message, type)
    //  setTimeout(() => 
    //    setAlert(null), 5000)
   }

return <alertContext.Provider
value={{
    alert: state,
    setAlert,
//   users: state.users,
//   user: state.user,
//   repos: state.repos,
//   loading: state.loading,
//   searchUsers,
//   clearUsers,
//   getUser,
//   getUserRepos,
}}
>
{props.children}
</alertContext.Provider>
}

export default AlertState;