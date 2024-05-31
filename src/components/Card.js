import "../index.css";
import "../Products/Products.css";

import { BsFillBagHeartFill } from "react-icons/bs";

const card = ({ shoe }) => {
    return (
        <section className="card">
            <img src={shoe.img} alt={shoe.title} className="card-img" />
            <div className="card-details">
                <h3 className="card-title">{shoe.title}</h3>
                <section className="card-reviews">
                    {shoe.star}
                    <span className="total-reviews">{shoe.reviews}</span>
                </section>
                <section className="card-price">
                    <div className="price-tag">
                        <del>{shoe.prevPrice}</del> ${shoe.newPrice}
                    </div>
                    <div className="bag-icon">
                        <BsFillBagHeartFill />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default card;
