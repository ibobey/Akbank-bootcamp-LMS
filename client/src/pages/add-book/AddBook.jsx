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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_ROOT_DIR}/api/books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "book_name": formData.bookName,
          "author": formData.author,
          "page_number": parseInt(formData.numberOfPage),
          "release_date": formData.relaseDate
        }),
      });
      const responseData = await response.json();
      toast("Book inserted");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleClear = async () => {
    setFormData({
      bookName: "",
      author: "",
      relaseDate: "",
      numberOfPage: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
              value={formData.bookName}
              placeholder="book name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="author"
              value={formData.author}
              placeholder="author"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="numberOfPage"
              value={formData.numberOfPage}
              placeholder="number of page"
              onChange={handleChange}
            />
            <input
              type="date"
              name="relaseDate"
              value={formData.relaseDate}
              placeholder="relase date"
              onChange={handleChange}
            />
            <button type="submit">Add</button>
            <i className="fa-solid fa-trash" onClick={handleClear}></i>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-left" autoClose={1000} theme="dark" />
    </>
  );
}
