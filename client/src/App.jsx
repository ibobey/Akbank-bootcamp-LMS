import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import AddBook from "./pages/add-book/AddBook";
import RemoveBook from "./pages/remove-book/RemoveBook";
import ListBook from "./pages/list-book/ListBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/list-book" element={<ListBook />} />
          <Route path="/remove-book" element={<RemoveBook />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
