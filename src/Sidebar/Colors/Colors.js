import "./Colors.css";

const Colors = () => {
    return (
        <div>
            <h2 className="sidebar-title colors-title">Colors</h2>
            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="category-type" />
                    <span className="checkmark"></span>All
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" name="category-type" />
                    <span className="checkmark"></span>Black
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" name="category-type" />
                    <span className="checkmark"></span>Blue
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" name="category-type" />
                    <span className="checkmark"></span>Red
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" name="category-type" />
                    <span className="checkmark"></span>Green
                </label>
            </div>
        </div>
    );
};

export default Colors;
