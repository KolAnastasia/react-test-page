import s from './s.module.css'
import { useNavigate } from 'react-router-dom';


const Header = ({title}) => {

const navigate = useNavigate();
const handleClick = () => {
    navigate('/HomePage')
}

    return  (
        
            <header>
                <p> {title}</p>
                <button onClick={handleClick}>На главную</button>
            </header>
        
    )
}

export default Header;