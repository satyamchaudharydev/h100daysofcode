import product from "../data/productInfoData";
import ProductSection from "./ProductSection";
const NutriSection = () => {
  return (
    <>
      <ProductSection
        heading={"Best Selling Nutrition & Health"}
        info={product.filter((item) => item.category === "face")}
      />
    </>
  );
};
export default NutriSection;
