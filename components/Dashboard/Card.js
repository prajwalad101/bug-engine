export default function Card({ message, data }) {
  return (
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-700 text-base leading-tight font-medium mb-2">
          {message}
        </h5>
        <p className="font-semibold text-gray-700 text-2xl mb-2">{data}</p>
      </div>
    </div>
  );
}
