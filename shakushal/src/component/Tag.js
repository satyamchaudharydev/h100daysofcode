import product from "../data/productInfoData";

const Tag = ({ text, setTagState, setFilterProduct, tagstate, index }) => {
  return (
    <p
      onClick={() => {
        setFilterProduct(product.filter(item => item.category === text));
        setTagState(index);
      }}
      className={tagstate === index && "active-tag"}
    >
      {text}
    </p>
  );
};
export default Tag;
