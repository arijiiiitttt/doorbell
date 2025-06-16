import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { auth } from "./firebase";
import { toast } from 'react-toastify';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Sucessfully!!!");
      window.location.href="/content";
      toast.success("User Registered Successfully!!!", { position: "top-center" });
    }
    catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "top-center" });

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-sm">
        {/* Logo */}
        <div className="flex justify-start mb-6">
          <img
            src="/"
            alt="Doorbell Logo"
            className="w-10 h-10"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900">Login to Doorbell</h2>
        <p className="text-sm text-gray-500 mb-6 mt-1">
          Welcome to a workspace that’s secure, powerful, and totally private.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or username"
            className="w-full px-4 py-3 mb-3 border border-gray-300 rounded-xl bg-[#f5f5f5] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-[#f5f5f5] text-sm placeholder-gray-500 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-xl"
            >
              {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl text-sm font-semibold hover:opacity-90"
          >
            Log in
          </button>
        </form>

        {/* Links */}
        <div className="mt-4">
          <a href="#" className="text-sm text-red-600 hover:underline block mb-1">
            Forgot password?
          </a>
          <p className="text-sm text-gray-600">
            Don’t have an account?{' '}
            <a href="/register" className="text-red-600 hover:underline">
              Sign up.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
