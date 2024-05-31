import "./Products.css";
import Card from "../components/Card";

const Products = ({ shoes }) => {
    return (
        <section className="card-container">
            {shoes.map((shoe) => (
                <Card shoe={shoe} />
            ))}
        </section>
    );
};

export default Products;
