import "./AddBook.css";
import Header from "../../components/header/Header";
export default function AddBook() {
  return (
    <>
      <Header />
      <div className="page-add-book">
        <div className="page-add-book-container">
          <form>
            <label>Add Book</label>
            <input type="text" placeholder="book name" required />
            <input type="text" placeholder="author" required />
            <input type="date " placeholder="release date" />
            <input type="text" placeholder="number of page" />

            <button type="submit">Add</button>
            <i className="fa-solid fa-trash"></i>
          </form>
        </div>
      </div>
    </>
  );
}
