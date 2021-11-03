import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({user: { login, avatar_url, html_url, id }}) => {

// state = {
//     id: 'id',
//     login: 'mojombo',
//     avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
//     html_url: "https://github.com/mojombo"
//   }
  // const {avatar_url, login, html_url} = props.user;

  
    return (
      <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style={{width: '60px'}} />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="a.btn.btn-dark.btn-sm my-2"> More</a>
        </div>
      </div>
    )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}
export default UserItem;

