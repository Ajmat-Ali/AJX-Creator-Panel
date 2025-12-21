import Header from "./Header";
import ScriptMain from "./ScriptMain";

function scriptGenerator() {
  return (
    <div className="flex">
      <main className="flex-1 p-8 mt-16">
        <Header />
        <ScriptMain />
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Saved Scripts
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            id="savedScriptsContainer"
          >
            {/* <!-- Saved scripts will be loaded here --> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default scriptGenerator;
