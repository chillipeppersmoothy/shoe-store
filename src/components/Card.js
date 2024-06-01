import "../index.css";
import "../Products/Products.css";

import { BsFillBagHeartFill } from "react-icons/bs";

const card = ({ product }) => {
    return (
        <section className="card">
            <img src={product.img} alt={product.title} className="card-img" />
            <div className="card-details">
                <h3 className="card-title">{product.title}</h3>
                <section className="card-reviews">
                    {product.star} {product.star} {product.star} {product.star}
                    <span className="total-reviews">{product.reviews}</span>
                </section>
                <section className="card-price">
                    <div className="price-tag">
                        <del>{product.prevPrice}</del> ${product.newPrice}
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
