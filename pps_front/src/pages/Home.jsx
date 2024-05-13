import DisplayJobOffer from "../components/DisplayJobOffer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState} from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  
  const handleSearchChange = (value) => {
    setSearch(value);
    console.log(value);
  };
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      <Header onSearchChange={handleSearchChange} search={search} setSearch={setSearch} searchon={true} />
      
      <div style={{ flex: 1 }}>
      <DisplayJobOffer busqueda={search} />
      </div>

      <Footer youarenterprise={true} moreinfo={true} />
    </div>
  );
};

export default Home;
