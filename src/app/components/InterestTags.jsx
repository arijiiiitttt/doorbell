import React from 'react';

const InterestTags = ({ interests, selectedInterests, onInterestChange }) => {
    return (
        <div className="flex flex-wrap">
            {interests.map((interest) => (
                <button
                    key={interest}
                    className={`px-4 py-2 rounded-full m-1 text-sm font-medium ${
                        selectedInterests.includes(interest)
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => onInterestChange(interest)}
                >
                    {interest}
                </button>
            ))}
        </div>
    );
};

export default InterestTags;
