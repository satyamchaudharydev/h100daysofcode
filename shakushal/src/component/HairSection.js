import product from "../data/productInfoData";
import ProductSection from "./ProductSection";
import { Title } from "./Title";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";

const HairSection = () => {
  const { productList, getData, dataLoading } = useAuth();

  const [filterProduct, setFilterProduct] = useState([]);
  useEffect(() => {
    getData();
    setFilterProduct(
      productList.filter((item) => item.category === "hair")
    );
  }, [dataLoading]);
  return (
    <>
      <ProductSection
        heading={
          <Title text={"Best Selling"} span={" Hair & Products"}></Title>
        }
        info={filterProduct}
      />
    </>
  );
};
export default HairSection;
