import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Project from "./components/Project/Experience";
import About from "./components/About/About";
import Footer from "./components/Footer";
import SavingsT from "./components/SavingsT";
import StockP from "./components/StockP";
import ToDoList from "./components/ToDoList";


function App() {
  return (
      <BrowserRouter>
        <Navbar />
            <Routes>
              <Route path="/" element={<Project />} />
              <Route path="/about" element={<About />} />
              <Route path="/savings_tracker" element={<SavingsT />} />
              <Route path="/stock_profit_comparison" element={<StockP />} />
              <Route path="/to_do_list" element={<ToDoList />} />
            </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
