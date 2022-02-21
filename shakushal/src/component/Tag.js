const Tag = ({
  text,
  filterProduct,
  setTagState,
  setFilterProduct,
  tagstate,
  list,
  productList,
  index,
}) => {
  return (
    <p
      onClick={() => {
        setFilterProduct(
          productList.filter((item) => item.category === text)
          );
        setTagState(index);
      }}
      className={tagstate === index && "active-tag"}
    >
      {text}
    </p>
  );
};
export default Tag;
