function Button(){
    function handleClick(){
        alert("button is been clicked.");
    }
    return <button onClick={handleClick}>Click me </button>
}

export default Button