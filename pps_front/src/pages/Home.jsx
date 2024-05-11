import DisplayJobOffer from "../components/DisplayJobOffer";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header logged={false} />
      <div style={{ flex: 1 }}>
        <DisplayJobOffer />
      </div>
      <Footer youarenterprise={true} moreinfo={true} />
    </div>
  );
};

export default Home;
