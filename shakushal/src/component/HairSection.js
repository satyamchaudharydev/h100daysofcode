import product from "../data/productInfoData";
import ProductSection from "./ProductSection";
const HairSection =  () => {
    return (
      <>
        <ProductSection
          heading={"Best Selling Skin & Hair Care"}
          info={product.filter((item) => item.category === "hair")}
        />
      </>
    );
}
export default HairSection