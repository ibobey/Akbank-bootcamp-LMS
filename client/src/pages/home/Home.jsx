import "./Home.css";
import Header from "../../components/header/Header";
import QuickSelect from "./home-components/QuickSelect";

export default function Home() {
  return (
    <div className="page-home">
      <Header />
      <div className="page-home-container">
        <QuickSelect
          info="ADD BOOK"
          source="/icon_add.jpg"
          routeTo="/add-book"
        />
        <QuickSelect
          info="LIST BOOK"
          source="/icon_search.jpg"
          routeTo="/list-book"
        />
        <QuickSelect
          info="REMOVE BOOK"
          source="/icon_remove.jpg"
          routeTo="/remove-book"
        />
      </div>
    </div>
  );
}
