import './style.css'
function Button({type, children}){
    return (
        <>
            <button  className="form-button" type={type}>
                {children}
            </button>
        </>
    )
}

export default Button