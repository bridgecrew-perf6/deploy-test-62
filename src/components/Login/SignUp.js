import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {signUp} from "../../firebase";
import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email !== '' && password !== '') {
        await signUp(email, password);
        setPassword('');
        setEmail('');
        navigate('products');
      }
    } catch (e) {
      console.log('Error:', e);
    }
  }
  return (
    <div className='container'>
      <form className="loginForm" onSubmit={formSubmit}>
        <h2>Sign Up</h2>
        <input
          placeholder='Email'
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="loginInput"/>
        <input
          placeholder='Password'
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="loginInput"/>
        <button type='submit'>sign up</button>
      </form>
    </div>
  );
};

export default Login;
