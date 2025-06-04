function WaitingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-2xl font-semibold mb-4">Waiting for a match...</p>
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default WaitingScreen;
