import DisplayJobOffer from "../components/DisplayJobOffer";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <DisplayJobOffer />
      <Footer youarenterprise={true} moreinfo={true} />
    </div>
  );
};

export default Home;
