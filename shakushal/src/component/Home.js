import Nav from "./Nav";
import Carousel from "./Carousel";
import ProductInfo from "./ProductInfo";
import HealthConcern from "./HealthConcern";
import HairSection from "./HairSection";
import NutriSection from "./Nutritionsection";
import Collections from "./Collections";
import Footer from "./Footer";
import { ShoppingCart } from "./ShoppingCart";
import { useAuth } from "../contexts/AuthContext";
const Home = () => {

  return (
    <>
      <ShoppingCart />

      <Nav />
      <div className="home-wrapper">
        <Carousel />
        <ProductInfo />
        <HealthConcern />
        <HairSection />
        <Collections />
        <NutriSection />
        <Footer />
      </div>
    </>
  );
};
export default Home;
