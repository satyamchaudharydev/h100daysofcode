import product from "../data/productInfoData";
import ProductSection from "./ProductSection";
import { Title } from "./Title";
import { useAuth } from "../contexts/AuthContext";
import { useState,useEffect} from "react";
const NutriSection = () => {
  const { productList, getData, dataLoading } = useAuth();
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    getData();
    setFilterProduct(
      productList.filter((item) => item.category === "Nutrition")
    );
  }, [dataLoading]);
  return (
    <>
      <ProductSection
        heading={<Title text={"Best Selling"} span={" Nutrition & Health"} />}
        info={filterProduct}
      />
    </>
  );
};
export default NutriSection;
