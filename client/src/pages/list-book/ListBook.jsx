import "./ListBook.css";
import Header from "../../components/header/Header";

import { useState, useEffect } from "react";

export default function ListBook() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:10000/api/books");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filterData = (veri) => {
    return (
      veri.book_name.toLowerCase().includes(searchKey.toLowerCase()) ||
      veri.author.toLowerCase().includes(searchKey.toLowerCase())
    );
  };

  return (
    <>
      <Header />
      <div className="page-list-book">
        <input
          type="text"
          placeholder="search"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <div className="page-list-book-contianer">
          <div className="page-list-book-book-table">
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Book</th>
                  <th>Author</th>
                  <th>Page Number</th>
                  <th>Release Date</th>
                </tr>
              </thead>
              <tbody>
                {data.filter(filterData).map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.book_name}</td>
                    <td>{item.author}</td>
                    <td>{item.page_number}</td>
                    <td>{item.release_date}</td>
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
