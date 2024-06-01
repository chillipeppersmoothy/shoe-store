const Button = ({ handleClick, className, title, value }) => {
    return (
        <button onClick={handleClick} className={className} value={value}>
            {title}
        </button>
    );
};

export default Button;
