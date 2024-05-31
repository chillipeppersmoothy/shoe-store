import "./App.css";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recomended from "./Recomended/Recomended";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import { data } from "./db/data";

function App() {
    const [products, setProducts] = useState(data);

    // Search Filter
    const [search, setSearch] = useState("");

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    // Radio Filter
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Button Filter
    const handleRecomendedButtonClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div>
            <Sidebar />
            <Navigation />
            <Recomended />
            <Products shoes={products} />
        </div>
    );
}

export default App;
