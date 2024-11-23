import React from 'react';
import { Link } from 'react-router-dom';
//Importação dos estilos definifos com styled-component
import { HeaderStyle } from './estilos';
//Importação da imagem da logomarca da Sturbuks
import Logo from '../../assets/logo.png';


const Header = () => {
  return (
    <HeaderStyle>
       <img src={Logo} alt="logomarca" />
        <nav>
            <ul>
                <li>
                    <Link to="/" className='link'>Home</Link>
                </li>
                <li>
                    <Link to="/novidades" className='link'>Novidades</Link>
                </li>
                <li>
                    <Link to="sobre" className='link'>Sobre</Link>
                </li>
            </ul>
        </nav>
    </HeaderStyle>
  )
}

export default Header