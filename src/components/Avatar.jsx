function Avatar({ src, name }) {
  return (
    <div
      className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center 
bg-gray-200 text-gray-700 font-semibold select-none 
ring-2 ring-gray-200 hover:ring-blue-500 
cursor-pointer transition-all duration-200"
    >
      {src ? (
        <img src={src} className="w-full h-full object-cover" />
      ) : (
        <span>{name?.[0]?.toUpperCase()}</span>
      )}
    </div>
  );
}

export default Avatar;
