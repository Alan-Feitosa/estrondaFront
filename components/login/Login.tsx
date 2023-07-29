import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-semibold">Email</label>
            <input
              type="text"
              id="email"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold">Senha</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-opacity-50"
            />
          </div>
          <button className="bg-indigo-900 text-white font-semibold px-4 py-2 rounded hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-opacity-50 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;