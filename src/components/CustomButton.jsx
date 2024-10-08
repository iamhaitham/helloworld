const CustomButton = ({ buttonContent, handleClick }) => {
    return (
        <button onClick={ handleClick }>{ buttonContent }</button>
    ); 
};

export { CustomButton };