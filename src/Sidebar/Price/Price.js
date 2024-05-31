import "./Price.css";

const Price = () => {
    return (
        <div>
            <h2 className="sidebar-title price-title">Price</h2>
            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="price-type" />
                    <span className="checkmark"></span>All
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" name="price-type" />
                    <span className="checkmark"></span>$0-$50
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" name="price-type" />
                    <span className="checkmark"></span>$50-$100
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" name="price-type" />
                    <span className="checkmark"></span>$100-$150
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" name="price-type" />
                    <span className="checkmark"></span>Over $150
                </label>
            </div>
        </div>
    );
};

export default Price;
