import React from 'react';
import { Link } from 'react-router-dom';
import Loja from '../../assets/loja.png';
import { Secao } from './estilos';



const Sobre = () => {
  return (
    <Secao>

      <div className='div-loja'>
          <img src={Loja} alt="Loja" className='Loja'/>
      </div>

       <div className='div-textos'>
        <p className='texto1'>História</p>
        <p className='texto2'>Quando <span>Starbucks</span> foi fundada?</p>
        <p className='texto3'>Quando a primeira Starbucks foi inaugurada em 1971, a nossa empresa era uma única loja no histórico Pike Place Market de Seattle. De uma loja estreita, a Starbucks oferecia alguns dos melhores cafés em grão recém-torrados do mundo. O nome, inspirado em Moby Dick, recordou o romance de alto mar e a tradição marítima dos primeiros comerciantes de café.</p>
        <Link to="https://www.starbucksathome.com/br//sobre-starbucks" target='blank'><button>Saiba mais</button></Link>

       </div>

    </Secao>
   
  )
}

export default Sobre