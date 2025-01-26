import React, {useState} from 'react';
import Logo from "../../assets/logo.svg";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {register} from "../../../authService.ts";
import {toast} from "react-toastify";

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {firstName, lastName, email, password};

    try {
      await register(user);
      toast.success('User registered successfully!');
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error('Failed to register user.');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-preschoolPrimary to-preschoolPrimaryLight">
      <form onSubmit={handleRegister} className="flex flex-col gap-5 items-center bg-white rounded-md p-10">
        <img src={Logo} alt="logo" width={150} height={150}/>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs text-gray-500">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white text-black border border-solid border-gray-500 rounded-[5px] p-1 text-gray-500 focus:border-preschoolPrimary focus:bg-gray-100 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-xs text-gray-500">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="bg-white text-black border border-solid border-gray-500 rounded-[5px] p-1 text-gray-500 focus:border-preschoolPrimary focus:bg-gray-100 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-xs text-gray-500">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="bg-white text-black border border-solid border-gray-500 rounded-[5px] p-1 text-gray-500 focus:border-preschoolPrimary focus:bg-gray-100 focus:outline-none"
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
            className="bg-white text-black border border-solid border-gray-500 rounded-[5px] p-1 text-gray-500 focus:border-preschoolPrimary focus:bg-gray-100 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword" className="text-xs text-gray-500">Confirm password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="bg-white text-black border border-solid border-gray-500 rounded-[5px] p-1 text-gray-500 focus:border-preschoolPrimary focus:bg-gray-100 focus:outline-none"
          />
        </div>
        <button type="submit"
                className="bg-white text-black py-2 px-5 text-gray-500 border border-solid border-preschoolPrimary rounded-[5px] hover:bg-preschoolPrimary hover:text-white">Register
        </button>
        <div className="flex gap-2">
          <span className="text-xs">Have an account?</span>
          <Link to="/login" className="text-xs text-preschoolPrimary cursor-pointer">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;