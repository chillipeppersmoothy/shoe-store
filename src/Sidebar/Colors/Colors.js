import { colorsData } from "src/db/data";
import "./Colors.css";
import Input from "./../../components/Input";

const Colors = ({ handleChange }) => {
    return (
        <div>
            <h2 className="sidebar-title colors-title">Colors</h2>
            <div>
                {colorsData.map(
                    ({ value, name, title, color, border }, index) => (
                        <Input
                            key={index}
                            handleChange={handleChange}
                            value={value}
                            name={name}
                            title={title}
                            color={color}
                            border={border}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Colors;
