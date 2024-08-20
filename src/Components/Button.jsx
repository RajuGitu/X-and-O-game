const Button = ({  handleClick,id }) => {
    return (
        <button className="button" onClick={() => handleClick(event,id)}>
            
        </button>
    )
}

export default Button;