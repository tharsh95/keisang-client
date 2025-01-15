
import Average from "./components/average-msrp";
import Header from "./components/Header";
import HistoryLog from "./components/History/HistoryLog";

import Count from "./components/inventory-count";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Navbar />
      <div className=" bg-[#f5f5f5] w-full min-h-screen">
        <div className="p-4">
          <Header />
          <Stats/>
          <Count/>
          <Average/>
          <HistoryLog/>
        </div>
      </div>
    </>
  );
}

export default App;
