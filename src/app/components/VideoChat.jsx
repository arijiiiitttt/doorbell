import React, { useEffect, useRef } from 'react';

const VideoChat = ({ roomId, userId, otherUserId }) => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);

    useEffect(() => {
        // In a real application, this is where you would initialize WebRTC
        // and handle the video streams.  This is a placeholder.
        console.log(`Joining room: ${roomId} as user: ${userId}, other user: ${otherUserId}`);

        // Simulate local video stream
        if (localVideoRef.current) {
            localVideoRef.current.srcObject = new MediaStream(); // Empty stream for now
        }

        // Simulate remote video stream
        if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = new MediaStream(); // Empty stream for now
        }

        // Cleanup (important for WebRTC)
        return () => {
            console.log('Leaving video chat');
            // In a real app, you'd need to close connections, stop streams, etc.
        };
    }, [roomId, userId, otherUserId]);

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Video Chat</h3>
            <div className="flex">
                <div>
                    <p className="text-sm">Your Video</p>
                    <video ref={localVideoRef} autoPlay muted className="w-64 h-48 bg-gray-300"></video>
                </div>
                <div className="ml-4">
                    <p className="text-sm">Stranger's Video</p>
                    <video ref={remoteVideoRef} autoPlay className="w-64 h-48 bg-gray-300"></video>
                </div>
            </div>
            <p className="text-sm mt-2">Room ID: {roomId}</p>
        </div>
    );
};

export default VideoChat;
