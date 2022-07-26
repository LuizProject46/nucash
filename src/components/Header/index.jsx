import './style.css'
import { FaMoneyCheckAlt } from 'react-icons/fa'
function Header(){
    return(
        <header className="header">
            <div>
                <div>
                    <span className="logo-name-span"><FaMoneyCheckAlt size={18}/> Nu<span>Cash</span></span>
                </div>
                <div>
                    {/* <a href="#">Inicio</a> */}
                </div>
            </div>
            
        </header>
    )
}

export default Header