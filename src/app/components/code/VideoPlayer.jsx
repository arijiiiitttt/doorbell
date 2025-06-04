export default function VideoPlayer({ stream, label }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current && stream) {
      ref.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="w-1/2 p-4">
      <p className="text-center">{label}</p>
      <video ref={ref} autoPlay playsInline className="w-full rounded" />
    </div>
  );
}
