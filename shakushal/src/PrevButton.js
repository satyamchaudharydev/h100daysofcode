const PrevButton = ({ component }) => {
  return (
    <>
      <div
        className="prev-btn center"
        onClick={() => component((prev) => prev + 1)}
      >
        <img src="./images/icon-next.svg" alt="" srcset="" />
      </div>
    </>
  );
};
export default PrevButton;
