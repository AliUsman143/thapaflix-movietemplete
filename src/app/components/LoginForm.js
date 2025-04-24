import { useState } from "react";

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const defaultEmail = "ali@gmail.com";
  const defaultPassword = "12345";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the credentials are correct
    if (email === defaultEmail && password === defaultPassword) {
      onLoginSuccess();
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div 
      className="flex justify-center items-center h-screen bg-cover bg-center" 
      style={{ backgroundImage: 'url(img/bglogin1.jpeg)' }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full border-2 border-gray-200">
        <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-6">Login to Watch Movies</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full p-4 bg-blue-500 text-white rounded-xl shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account? 
              <span className="text-blue-400 cursor-pointer hover:underline">Sign Up</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
