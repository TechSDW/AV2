import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

type LoginProps = {
  onLogin: () => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === 'admin' && password === 'admin') {
      onLogin();
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-300 flex items-center justify-center">
      <div className="w-full max-w-md px-8">
        <div className="text-center mb-12">
          <p className="text-white mb-2">Bem-vindo ao</p>
          <h1 className="text-white text-5xl">Aerocode</h1>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <p className="text-white text-center">
            <span className="block mb-2">Credenciais de acesso:</span>
            <span className="block">Email: <strong>admin</strong></span>
            <span className="block">Senha: <strong>admin</strong></span>
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-xl">
          <h2 className="text-2xl text-center mb-6">Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
            </div>

            {error && (
              <p className="text-red-600 text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
