import "./App.css";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recomended from "./Recomended/Recomended";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import { data as products } from "./db/data";
import Card from "./components/Card";

function App() {
    // input Filter
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = products.filter(
        (product) =>
            product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    // Radio Filter
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handlChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Button Filter
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredData = (products, selected, query) => {
        let filteredProducts = products;

        if (query) {
            filteredProducts = filteredItems;
        }

        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                    category === selected ||
                    color === selected ||
                    company === selected ||
                    newPrice === selected ||
                    title === selected
            );
        }

        return filteredProducts.map((product, index) => (
            <Card product={product} key={index} />
        ));
    };

    const result = filteredData(products, selectedCategory, query);

    return (
        <div>
            <Sidebar handlChange={handlChange} />
            <Navigation query={query} handleInputChange={handleInputChange} />
            <Recomended handleClick={handleClick} />
            <Products result={result} />
        </div>
    );
}

export default App;
