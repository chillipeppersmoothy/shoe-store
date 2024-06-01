import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = ({ hanleChange }) => {
    return (
        <section className="sidebar">
            <div className="logo-container">
                <h1>🛒</h1>
            </div>
            <Category hanleChange={hanleChange} />
            <Price hanleChange={hanleChange} />
            <Colors hanleChange={hanleChange} />
        </section>
    );
};

export default Sidebar;
