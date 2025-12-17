function Avatar({ src, name }) {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gray-300 text-gray-800 font-semibold select-none ring-2 ring-green-500 hover:ring-green-600 cursor-pointer transition">
      {src ? (
        <img src={src} className="w-full h-full object-cover" />
      ) : (
        <span>{name?.[0]?.toUpperCase()}</span>
      )}
    </div>
  );
}

export default Avatar;
