function ToneButton({ idea, handleTone, text, val }) {
  return (
    <button
      onClick={(e) => handleTone(e, val)}
      name="tone"
      value={idea.tone}
      className={`${
        idea.tone === val ? "bg-blue-100 border-blue-300 text-blue-700" : ""
      } tone-btn border border-gray-300 rounded-lg px-3 py-2 text-sm hover:bg-gray-50 font-semibold`}
    >
      {text}
    </button>
  );
}

export default ToneButton;
