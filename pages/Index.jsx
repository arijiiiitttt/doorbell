import { useState, useEffect } from 'react';
import InterestTags from '../components/InterestTags';
import VideoChat from '../components/VideoChat';
import { v4 as uuidv4 } from 'uuid'; // Import UUID

export default function Home() {
    const [name, setName] = useState('');
    const [interests, setInterests] = useState([]);
    const [location, setLocation] = useState('');
    const [matchedUser, setMatchedUser] = useState(null);
    const [isSearching, setIsSearching] = useState(false);
    const [roomId, setRoomId] = useState(null); // Store the room ID

    const availableInterests = ['Coding', 'Music', 'Travel', 'Gaming', 'Reading', 'Sports'];

    const handleInterestChange = (interest) => {
        if (interests.includes(interest)) {
            setInterests(interests.filter((i) => i !== interest));
        } else {
            setInterests([...interests, interest]);
        }
    };

    const handleSearch = async () => {
        setIsSearching(true);
        try {
            // Basic validation
            if (!name || interests.length === 0 || !location) {
                alert('Please fill in all fields.');
                setIsSearching(false);
                return;
            }

            // Generate a unique room ID
            const newRoomId = uuidv4();
            setRoomId(newRoomId);

            // Simulate finding a match (replace with API call)
            setTimeout(() => {
                // In a real app, this would be the result of an API call
                const fakeMatchedUser = {
                    id: 'user2',
                    name: 'John Doe',
                    interests: interests,
                };
                setMatchedUser(fakeMatchedUser);
                setIsSearching(false);
            }, 2000); // Simulate a 2-second search
        } catch (error) {
            console.error('Error searching for a match:', error);
            alert('Error finding a match. Please try again.');
            setIsSearching(false);
        }
    };

    const handleDisconnect = () => {
        // In a real app, you'd need to signal the other user to disconnect
        setMatchedUser(null);
        setRoomId(null);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Doorbell</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Interests:
                    </label>
                    <InterestTags
                        interests={availableInterests}
                        selectedInterests={interests}
                        onInterestChange={handleInterestChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                        Location:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        type="text"
                        placeholder="Your Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSearching ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="button"
                        onClick={handleSearch}
                        disabled={isSearching}
                    >
                        {isSearching ? 'Searching...' : 'Search a Stranger'}
                    </button>
                </div>
            </div>

            {matchedUser && (
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-2">Matched with {matchedUser.name}!</h2>
                    <p>Interests: {matchedUser.interests.join(', ')}</p>
                    <VideoChat roomId={roomId} userId="user1" otherUserId={matchedUser.id} /> {/* Pass the room ID */}
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                        onClick={handleDisconnect}
                    >
                        Disconnect
                    </button>
                </div>
            )}
        </div>
    );
}
