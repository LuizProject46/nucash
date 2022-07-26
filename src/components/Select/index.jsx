import './style.css'
function Select({ name, type, setOption}){
    return (
        <>
            <select className="form-select" name={name} onChange={(e) => setOption(e.target.value)} value={type}>
                <option value="saida">Saída</option>
                <option value="entrada">Entrada</option>
            </select>   
        </>
    )

}

export default Select