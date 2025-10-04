import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await registerUser({ name, email, password });
      alert('Signup successful! Please login.');
      navigate('/login');
    } catch(err){
      const errorMessage = err.response?.data?.message || 'Error during signup';
      alert(errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="mb-4 p-2 border w-full rounded"/>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="mb-4 p-2 border w-full rounded"/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="mb-4 p-2 border w-full rounded"/>
        <button type="submit" className="bg-green-600 text-white w-full p-2 rounded hover:bg-green-700">Signup</button>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
