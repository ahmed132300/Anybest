import './Header.css';
import { useState } from 'react';
import logo from '../../public/logo.png'
import vid from '../images/vid.gif'
import { useNavigate } from 'react-router-dom';
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <header>
                <nav className="nav">
                    <h1 className="logo"><img src={vid} className='vid' /></h1>
                    <ul className="links" style={{ display: isOpen ? 'block' : 'none' }}>
                        <li className="home" onClick={() => window.location.pathname = '/home'} >الرئيسية</li>
                        <li className="osman" onClick={() => window.location.pathname = '/osman'} >عثمان</li>
                        <li className="salah" onClick={() => window.location.pathname = '/salah'}>صلاح الدين</li>
                        <li className="elfateh" onClick={() => window.location.pathname = '/elfateh'}>محمد الفاتح</li>
                    </ul>
                    <img src={logo} onClick={() => setIsOpen(!isOpen)} className='menu' />
                </nav>
            </header>
        </>
    )

}
export default Header;