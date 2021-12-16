const NextButton = ({component}) => {
    return (
      <>
        <div
          className="next-btn center"
          onClick={() => component((prev) => prev - 1)}
        >
          <img src="./images/icon-previous.svg" alt="" srcset="" />
        </div>
      </>
    );
}
export default NextButton