import "./ListBook.css";
import Header from "../../components/header/Header";

export default function ListBook() {
  const data = [
    { id: 1, book_name: "A", author: "X", page_number: 100 },
    { id: 2, book_name: "B", author: "X1", page_number: 200 },
    { id: 3, book_name: "C", author: "X2", page_number: 300 },
    { id: 4, book_name: "D", author: "X3", page_number: 400 },
    { id: 5, book_name: "E", author: "X4", page_number: 500 },
  ];

  return (
    <>
      <Header />
      <div className="page-list-book">
        <div className="page-list-book-contianer">
          <div className="page-list-book-book-table">
            <table>
              <thead>
                <tr>
                  <th>Book</th>
                  <th>Author</th>
                  <th>Page Number</th>
                  <th>Release Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.book_name}</td>
                    <td>{item.author}</td>
                    <td>{item.page_number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
