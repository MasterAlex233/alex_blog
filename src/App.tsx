import { Routes, Route } from "react-router-dom"
import { HomeNavigate } from "@/components"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeNavigate />} />
      </Routes>
    </div >
  );
}

export default App;
