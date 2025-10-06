import "./App.css";
import MainContents from "./components/MainContents";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-full p-2 sm:p-8 font-sf-pro-display">
      <Navbar />
      <div className="max-w-[1600px] mx-auto">
        <MainContents />
      </div>
    </div>
  );
}

export default App;
