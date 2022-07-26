import Card from "../Card"
import './style.css'
import {FaExclamationCircle} from 'react-icons/fa'
function List({ listTransactions}){
    return(
        <div className="transactions">
           
            <h3>Lista de finanças</h3>
            {!listTransactions.length && (
                <div className="alert"><FaExclamationCircle/> <p>Nenhuma transação registrada até o momento.</p></div>
            )}
            {listTransactions.map((transaction, index) => (
                <Card
                    key={index+1}
                    value={transaction.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    description={transaction.description}
                    type={transaction.type}
                    className={`${transaction.type === 'entrada' ? 'active' : ''}`}
                />
            ))}
        </div>
    )
}

export default List