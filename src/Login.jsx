import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

export default function Login() {
  const [isReg, setIsReg] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isReg) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white dark:bg-gray-800 rounded shadow mt-8">
      <h2 className="text-xl font-bold mb-4">{isReg ? 'Kayıt Ol' : 'Giriş Yap'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parola"
          className="border p-2 w-full rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          {isReg ? 'Kayıt Ol' : 'Giriş Yap'}
        </button>
      </form>
      <button onClick={() => setIsReg(!isReg)} className="text-sm text-blue-600 mt-2">
        {isReg ? 'Zaten hesabın var mı? Giriş yap' : 'Hesabın yok mu? Kayıt ol'}
      </button>
    </div>
  );
}
