"use client";
import { useState } from 'react';

function InterestInput({ onInterestSubmit }) {
  const [interest, setInterest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onInterestSubmit(interest);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <label htmlFor="interest" className="text-lg font-semibold">Enter your interest:</label>
      <input
        type="text"
        id="interest"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="e.g., Coding, Music, Travel"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Find Match
      </button>
    </form>
  );
}

export default InterestInput;
