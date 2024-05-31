import "./Products.css";
import { data as shoes } from "../db/data";
import Card from "../components/Card";

const Products = () => {
    return (
        <section className="card-container">
            {shoes.map((shoe) => (
                <Card shoe={shoe} />
            ))}
        </section>
    );
};

export default Products;
