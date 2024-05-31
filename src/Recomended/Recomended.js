import "./Recomended.css";
import "../index.css";

const Recomended = () => {
    return (
        <div>
            <h2 className="recomended-title">Recomended </h2>
            <div className="recomended-flex">
                <button className="btns">All Products</button>
                <button className="btns">Adidas</button>
                <button className="btns">Nike</button>
                <button className="btns">Puma</button>
                <button className="btns">Vans</button>
            </div>
        </div>
    );
};

export default Recomended;
