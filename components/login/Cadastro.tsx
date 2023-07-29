import React from 'react';

const CadastroForm = () => {
  return (
    <form className="max-w-sm bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Cadastro</h2>
      <div>
        <label htmlFor="username"  className="block font-semibold">Usuario</label>
        <input
          placeholder="seu_usuario"
          type="text"
          id="username"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold">Email</label>
        <input
          placeholder="exemplo@outlook.com"
          type="email"
          id="email"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="password" className="block font-semibold">Senha</label>
        <input
          placeholder="*********"
          type="password"
          id="password"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-opacity-50"
        />
      </div>
      <button className="bg-indigo-900 text-white font-semibold px-4 py-2 rounded mt-4 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-opacity-50 w-full">
        Cadastrar
      </button>
    </form>
  );
};

export default CadastroForm;