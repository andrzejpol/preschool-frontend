import React, {useState} from 'react';
import Logo from "../../assets/logo.svg";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../../../authService.ts"
import {useDispatch} from "react-redux";
import {hideGlobalLoader, showGlobalLoader} from "../../slices/loaderSlice.ts";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(showGlobalLoader());
    try {
      const response = await login(email, password);
      console.log(response);
      navigate("/dashboard");
    } catch (error) {
      console.log("Błąd logowania", error);
    } finally {
      dispatch(hideGlobalLoader());
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-preschoolPrimary to-preschoolPrimaryLight">
      <form onSubmit={handleLogin} className="flex flex-col gap-5 items-center bg-white rounded-md p-10">
        <img src={Logo} alt="logo" width={150} height={150}/>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs text-gray-500">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
