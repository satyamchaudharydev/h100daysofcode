import buyTag from "../data/buyTag";

const Buytags = ({item,index,tagCount,setTagCount}) => {
  return (
    <>
      <div
        className={`buy-tag`}
        onClick={() => setTagCount(index)}
      >
        <p className={`${tagCount === index && "buy-tag-active"}`}>
          {item}
        </p>
      </div>
    </>
  );
};
export default Buytags
