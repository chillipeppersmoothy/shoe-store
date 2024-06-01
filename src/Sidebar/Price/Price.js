import { priceData } from "src/db/data";
import "./Price.css";
import Input from "./../../components/Input";

const Price = ({ handleChange }) => {
    return (
        <div>
            <h2 className="sidebar-title price-title">Price</h2>
            <div>
                {priceData.map(({ value, name, title }, index) => (
                    <Input
                        key={index}
                        handleChange={handleChange}
                        value={value}
                        name={name}
                        title={title}
                    />
                ))}
            </div>
        </div>
    );
};

export default Price;
