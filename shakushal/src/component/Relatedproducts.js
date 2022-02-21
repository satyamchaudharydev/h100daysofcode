import product from "../data/productInfoData";
import ProductSection from "./ProductSection";
const RealtedSection = () => {
  return (
    <>
      <ProductSection
        heading={"More Products you’ll like"}
        info={product.filter((item) => item.category === "hair")}
      />
    </>
  );
};
export default RealtedSection;
