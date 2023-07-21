// Testmoinal.js
import Image from "next/image";

const Testmoinal = ({ img, name, reviewText }) => {
  return (
    <>
      <div className="review">
        <div className="review-box">
          <div className="review-slider-img">
            <Image src={img} alt="img" width={100} height={100} />
          </div>
          <div className="review-slider-text">
            <h2>{name}</h2>
            <p>{reviewText}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export const Info = () => {
  return (
    <div className="info-box">
      <div className="info-left">
        <h1>Simplify how your team works today</h1>
      </div>
      <div className="btn-start">
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default Testmoinal;
