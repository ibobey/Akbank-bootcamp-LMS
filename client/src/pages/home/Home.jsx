import "./Home.css";
import Header from "../../components/header/Header";
import QuickSelect from "./home-components/QuickSelect";

export default function Home() {
  return (
    <>
    <Header />
      <QuickSelect
        info="CONTACT"
        source="https://cryptonairz.com/wp-content/uploads/2021/06/im-image-section-121.png"
        routeTo="/add-book"
      />
    </>
  );
}
