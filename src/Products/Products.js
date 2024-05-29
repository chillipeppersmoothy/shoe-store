import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import "./Products.css";

const Products = () => {
    return (
        <section className="card-container">
            <section className="card">
                <img
                    src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
                    alt="Nike Air Monarch IV"
                    className="card-img"
                />
                <div className="card-details">
                    <h3 className="card-title">Nike Air Monarch IV</h3>
                    <section className="card-reviews">
                        <AiFillStar className="star-rating" />
                        <AiFillStar className="star-rating" />
                        <AiFillStar className="star-rating" />
                        <AiFillStar className="star-rating" />
                        <span className="total-reviews">14</span>
                    </section>
                    <section className="card-price">
                        <div className="price-tag">
                            <del>$1,400.00</del>
                            $200
                        </div>
                        <div className="bag-icon">
                            <BsFillBagHeartFill />
                        </div>
                    </section>
                </div>
            </section>
        </section>
    );
};

export default Products;
