const rateTotal = [1, 2, 3, 4, 5];

const Rating = () => {
    return <div className="rating">
      {rateTotal.map((item) => (
        <img className="rating-none" src="./images/rate.svg" alt="" />
      ))}
    </div>
};
export default Rating
