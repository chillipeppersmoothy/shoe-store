import "./Category.css";
import { categoryData } from "../../db/data";
import Input from "../../components/Input";

const Category = ({ handleChange }) => {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>
            <div>
                {categoryData.map(({ value, name, title }, index) => (
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

export default Category;
