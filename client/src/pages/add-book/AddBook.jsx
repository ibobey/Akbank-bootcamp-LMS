import "./AddBook.css";
import Header from "../../components/header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

export default function AddBook() {
  const [formData, setFormData] = useState({
    bookName: "",
    author: "",
    relaseDate: "",
    numberOfPage: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast("Book inserted");
  };

  return (
    <>
      <Header />
      <div className="page-add-book">
        <div className="page-add-book-container">
          <form onSubmit={handleSubmit}>
            <label>Add Book</label>
            <input
              type="text"
              name="bookName"
              placeholder="book name"
              required
            />
            <input type="text" name="author" placeholder="author" required />
            <input type="date " name="relaseDate" placeholder="relase date" />
            <input
              type="text"
              name="numberOfPage"
              placeholder="number of page"
            />

            <button type="submit">
              Add
            </button>
            <i className="fa-solid fa-trash"></i>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-left" autoClose={1000} theme="dark" />
    </>
  );
}
