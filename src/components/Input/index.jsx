import "./style.css"
function Input({ type, name, value, placeholder, setValue}){
    return (
        <>
            <input 
                className="form-input"
                type={type} 
                name={name} 
                value={value} 
                placeholder={placeholder} 
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    )
}


export default Input