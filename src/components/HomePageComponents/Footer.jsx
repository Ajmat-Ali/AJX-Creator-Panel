export default function Footer() {
  return (
    <div className="border-2 mt-8 py-2 px-4 gap-4 border-red-500 flex justify-between | max-sm22:text-sm max-sm22:px-1 flex-wrap">
      <div>
        <span>&#169; AjX 2025</span>
      </div>
      <div className="flex gap-x-5 | max-sm22:gap-x-3">
        <p>Terms</p>
        <p>Privacy</p>
        <p>Contact</p>
      </div>
    </div>
  );
}
