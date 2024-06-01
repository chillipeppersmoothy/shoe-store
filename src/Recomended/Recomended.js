import "./Recomended.css";
import "../index.css";
import Button from "./../components/Button";
import { recomendedBtnsData } from "src/db/data";

const Recomended = ({ handleClick }) => {
    return (
        <div>
            <h2 className="recomended-title">Recomended </h2>
            <div className="recomended-flex">
                {recomendedBtnsData.map(
                    ({ className, title, value }, index) => (
                        <Button
                            key={index}
                            handleClick={handleClick}
                            className={className}
                            value={value}
                            title={title}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Recomended;
