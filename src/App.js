import "./App.css";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recomended from "./Recomended/Recomended";
import Sidebar from "./Sidebar/Sidebar";

function App() {
    return (
        <div>
            <Sidebar />
            <Navigation />
            <Recomended />
            <Products />
        </div>
    );
}

export default App;
