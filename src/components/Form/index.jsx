import { useState } from "react"
import Button from "../Button"
import Input from "../Input"
import Select from "../Select"
import TotalMoney from "../TotalMoney"
import './style.css'

function Form({ listTransactions, setListTransasctions}){

    const [transactionValue, setListTransactionValue ] = useState('')
    const [transactionDescription, setListTransactionDescription ] = useState('')
    const [transactionType, setListTransactionType ] = useState('saida')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(transactionValue === 0 || !transactionValue){
            alert("Ops! Precisar ser um valor maior que zero.")
            return
        }

        if(!transactionDescription){
            alert("Ops! A descrição é obrigatória.")
            return
        }


        setListTransasctions([
           
            {
                description: transactionDescription,
                type: transactionType,
                value: Number(transactionValue),
            },
            ...listTransactions
        ])

        setListTransactionValue('')
        setListTransactionDescription('')
        setListTransactionType('saida')
    }
    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <Input
                    type="number"
                    placeholder="Insira o valor" 
                    value={transactionValue}
                    setValue={setListTransactionValue}                   
                />
                <Input
                    type="text"
                    placeholder="Insira a descrição"
                    value={transactionDescription}
                    setValue={setListTransactionDescription}
                />
                <Select 
                    name="select-option"
                    setOption={setListTransactionType}
                    type={transactionType}
                />
                <Button type="submit">
                    Enviar
                </Button>
                
            </form>
            <TotalMoney listTransactions={listTransactions}/>
        </div>
    )
}

export default Form