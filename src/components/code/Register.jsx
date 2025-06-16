import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import {auth , db} from "./firebase";
import {setDoc ,doc} from "firebase/firestore";
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister=async(e)=>{
    e.preventDefault();
    try{
await createUserWithEmailAndPassword( auth ,email,password );
const user = auth.currentUser;
console.log(user);
if(user){
  await setDoc(doc(db,"Users",user.uid),{
    email:user.email,
    firstName:fname,
    lastName:lname,
  });
}
console.log("User is registered successfully");
 window.location.href="/login";
toast.success("User Registered Successfully!!!",{position:"top-center"});
    }catch(error){
      console.log(error.message);
      toast.error(error.message,{position:"top-center"});

    }
  };
 

  return (
    
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Skiff_Logo.svg/2048px-Skiff_Logo.svg.png"
        alt="Skiff Logo"
        className="w-10 h-10 mb-6"
      />

      {/* Heading */}
      <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Create your account</h2>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Join a secure and private workspace today.
      </p>

      {/* Form */}
      <form onSubmit={handleRegister} className="w-full max-w-sm flex flex-col gap-4">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First name"
            className="w-1/2 px-4 py-3 border border-gray-300 rounded-md bg-[#f5f5f5] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-1/2 px-4 py-3 border border-gray-300 rounded-md bg-[#f5f5f5] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#f5f5f5] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#f5f5f5] text-sm placeholder-gray-500 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
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
          className="w-full bg-black text-white py-3 rounded-md text-sm font-semibold hover:opacity-90 transition"
        >
          Create Account
        </button>
      </form>

      {/* Redirect to login */}
      <p className="text-sm text-gray-600 mt-5 text-center">
        Already have an account?{' '}
        <a href="/login" className="text-red-600 hover:underline font-medium">
          Log in
        </a>
      </p>
    </div>
  );
};

export default Register;
