import "./Home.css";
import Header from "../../components/header/Header";
import QuickSelect from "./home-components/QuickSelect";

export default function Home() {
  return (
    <>
      <Header />
      <div className="page-home-container">
        <QuickSelect
          info="ADD BOOK"
          source="https://cryptonairz.com/wp-content/uploads/2021/06/im-image-section-121.png"
          routeTo="/add-book"
        />
        <QuickSelect
          info="LIST BOOK"
          source="https://cryptonairz.com/wp-content/uploads/2021/06/im-image-section-121.png"
          routeTo="/list-book"
        />
        <QuickSelect
          info="REMOVE BOOK"
          source="https://cryptonairz.com/wp-content/uploads/2021/06/im-image-section-121.png"
          routeTo="/remove-book"
        />
      </div>
    </>
  );
}
