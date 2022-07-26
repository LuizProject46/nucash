import './style.css'

function TotalMoney({listTransactions}){
    const total = listTransactions.reduce((prev, current) => prev + current.value, 0)

    return (
        <div className="totalMoney">
            <div className="totalMoneyHeader">
                <div>
                    <span> Valor total :</span>
                </div>
                <div>
                    <span className="total">{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                </div>
            </div>
            <div className="totalMoneyFooter">
                <small>O valor se refere ao saldo.</small>
            </div>
            
        </div>
    )
}


export default TotalMoney