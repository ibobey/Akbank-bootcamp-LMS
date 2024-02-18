import "./RemoveBook.css";

import Header from "../../components/header/Header";

import { useState, useEffect } from "react";

export default function RemoveBook() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [removeRecs, setRemoveRecs] = useState([]);

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

  const handleRemove = async (id) => {
    setData(data.filter((item) => item.id !== id));
    setRemoveRecs([...removeRecs, id]);
  };

  const deleteRequestforBook = async (id) => {
    const url = `http://127.0.0.1:10000/api/books/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cannot Deleted!");
        }
      })
      .catch((error) => {
        console.error("Error 12:", error);
      });
  };
  
  const handleApplyChanges = async () => {
    removeRecs.forEach((id) => deleteRequestforBook(id));
  };


  const filterData = (key) => {
    return (
      key.book_name.toLowerCase().includes(searchKey.toLowerCase()) ||
      key.author.toLowerCase().includes(searchKey.toLowerCase())
    );
  };

  return (
    <>
      <Header />
      <div className="page-remove-book">
        <div className="page-remove-book-container">
        <input
          type="text"
          placeholder="search"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
          <div className="page-remove-book-book-table">
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Book</th>
                  <th>Author</th>
                  <th>Page Number</th>
                  <th>Release Date</th>
                  <th></th>
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
                    <td>
                      <i
                        className="fa-solid fa-trash"
                        onClick={() => {
                          handleRemove(item.id);
                        }}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={handleApplyChanges}> Apply Changes</button>
          <i
            style={{ fontSize: "1.5rem", cursor: "pointer", color: "grass" }}
            className="fa-solid fa-xmark"
            onClick={() => {
              setRemoveRecs([]);
              window.location.reload();
            }}
          ></i>
        </div>
      </div>
    </>
  );
}
