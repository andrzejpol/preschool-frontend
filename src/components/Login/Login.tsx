import React, {useState} from 'react';
import Logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-preschoolPrimary to-preschoolPrimaryLight">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center bg-white rounded-md p-10">
        <img src={Logo} alt="logo" width={150} height={150}/>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-xs text-gray-500">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border border-solid border-gray-500 rounded-[5px] p-1 text-gray-500 focus:border-preschoolPrimary focus:bg-gray-100 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-xs text-gray-500">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-solid border-gray-500 rounded-[5px] p-1 text-gray-500 focus:border-preschoolPrimary focus:bg-gray-100 focus:outline-none"
          />
        </div>
        <button type="submit"
                className="py-2 px-5 text-gray-500 border border-solid border-preschoolPrimary rounded-[5px] hover:bg-preschoolPrimary hover:text-white">Log
          In
        </button>
        <div className="flex gap-2">
          <span className="text-xs">Don't have an account?</span>
          <Link to="/register" className="text-xs text-preschoolPrimary cursor-pointer">Register me</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
