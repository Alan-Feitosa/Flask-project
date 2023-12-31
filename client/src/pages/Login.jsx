import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        // Login bem-sucedido, fazer ações necessárias, como redirecionamento.
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setMessage('Erro ao fazer login. Verifique o console para detalhes.');
    }
  }


  return(
    <main>
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>
                <form onSubmit={handleLogin}>
                <div className="mb-4 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="seuemail@example.com"
                    value={email} onChange={(e) => setEmail(e.target.value)} 
                />
                </div>
                <div className="mb-6 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Senha
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="********"
                    value={password} onChange={(e) => setPassword(e.target.value)} 
                />
                </div>
                <div className="w-full flex items-center justify-center">
                <button
                    className="bg-green-dark hover:bg-green-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Entrar
                </button>
                {message && <p>{message}</p>}
                </div>
                <button className="text-gray-500 text-sm mt-2" type="button">Não tem um login?</button>
                </form>
            </div>
        </div>
    </main>
  )
}


export default Login;
