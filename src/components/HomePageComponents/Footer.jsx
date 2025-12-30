export default function Footer() {
  return (
    <div className="mt-24 border-t border-gray-200 py-6 px-4 flex justify-between items-center flex-wrap gap-4 max-sm:text-sm">
      <div className="text-gray-500 font-medium">
        © AjX 2025. All rights reserved.
      </div>

      <div className="flex gap-x-6 text-gray-600 font-medium">
        <p className="cursor-pointer hover:text-black transition-colors">
          Terms
        </p>
        <p className="cursor-pointer hover:text-black transition-colors">
          Privacy
        </p>
        <p className="cursor-pointer hover:text-black transition-colors">
          Contact
        </p>
      </div>
    </div>
  );
}
