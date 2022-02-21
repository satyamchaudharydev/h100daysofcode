const Subcategory = ({
  text,
  setTagState,
  setFilterProduct,
  tagstate,
  productList,
  index,
}) => {
  return (
    <div className={`subcategory center ${tagstate === index && "active-tag"}`}>
      <p
        onClick={() => {
          // setFilterProduct(productList.filter((item) => item.category === text));
          setTagState(index);
        }}
      >
        {text}
      </p>
    </div>
  );
};
export default Subcategory;
