'use client';
import { useState } from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useAuthStore } from './store/useAuthStore';

export default function AuthPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const toggleMode = () => {
    setMode((prev) => (prev === 'login' ? 'signup' : 'login'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fake login/signup
    const user = {
      name: mode === 'signup' ? username : 'Rayen',
      email,
    };
    login(user);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-[100svh] w-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 w-full max-w-md rounded-xl p-8 shadow-lg space-y-6">
        <h1 className="text-center text-2xl font-bold text-cyan-400">
          {mode === 'login' ? '🔐 Login to FlipMine' : '📝 Create Your Account'}
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div>
              <label className="block text-sm mb-1 text-white">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="yourusername"
                className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              />
            </div>
          )}

          <div>
            <label className="block text-sm mb-1 text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-white">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 transition rounded text-white font-semibold"
          >
            {mode === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center text-gray-400 text-sm">
          {mode === 'login' ? 'Don’t have an account?' : 'Already have an account?'}{' '}
          <button
            onClick={toggleMode}
            className="text-cyan-400 font-medium hover:underline"
          >
            {mode === 'login' ? 'Sign Up' : 'Login'}
          </button>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-600" />
          <span className="mx-3 text-gray-400 text-xs">OR</span>
          <div className="flex-grow h-px bg-gray-600" />
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 bg-white text-black py-2 rounded hover:bg-gray-200 transition">
            <FaGoogle /> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            <FaFacebook /> Continue with Facebook
          </button>
          <button className="w-full flex items-center justify-center gap-3 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            <FaApple /> Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
}
