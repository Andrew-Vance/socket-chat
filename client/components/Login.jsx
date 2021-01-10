import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');

  const handleSubmit = () => {
    axios.post('/login', {
      username, password
    })
    .then(response => {
      console.log(repsonse);
      updateUsername('');
      updatePassword('');
    })
    .catch(err => {
      console.log(err);
    })
    //window.location = '/';
  }

  return (
    <div>
      <h1>Login</h1>
      Name: <input className='nameInput' value={username} onChange={(e) => {updateUsername(e.target.value)}}/><br/>
      Password: <input type='password' className="passwordInput" value={password} onChange={(e) => {updatePassword(e.target.value)}}/><br/>
      <button onClick={handleSubmit}>Login</button>
    </div>

  );
};

export default Login;