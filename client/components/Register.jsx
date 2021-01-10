import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {

  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');

  const handleSubmit = () => {
    axios.post('/register', {
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
  }

  return (
    <div>
      <h1>Create an account</h1>
      Name: <input className='nameInput' value={username} onChange={(e) => {updateUsername(e.target.value)}}/><br/>
      Password: <input type='password' className="passwordInput" value={password} onChange={(e) => {updatePassword(e.target.value)}}/><br/>
      <button onClick={handleSubmit}>Register</button>
    </div>

  );
};

export default Register;