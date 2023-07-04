import React from 'react'
import LoginContext from "../contexts/LoginContext";
import { useContext } from 'react';

const Form = ({ functions }) => {
  const {login} = useContext(LoginContext);
    return (
      <div className="w-full max-w-s">
        <form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="email"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input id="password" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="******************"/>
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between m-auto">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto" type="button"
              onClick={
                    () => login(document.getElementById("email").value,document.getElementById("password").value)
            }> Sign In</button>
          </div>
        </form>
      </div>
    );
};

export default Form;

