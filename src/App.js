import "./App.css";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recomended from "./Recomended/Recomended";

function App() {
    return (
        <div>
            <Navigation />
            <Recomended />
            <Products />
        </div>
    );
}

export default App;
