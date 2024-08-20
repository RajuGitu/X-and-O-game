import Button from './Button'

const Grid = ({ handleClick, buttonList }) => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className="gird">
            {arr.map((value, index) => <Button key={index} id={index} handleClick={handleClick}>
            </Button>)}
        </div>
    )
}

export default Grid;