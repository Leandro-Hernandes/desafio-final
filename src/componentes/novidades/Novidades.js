import React from 'react';
import { Link } from 'react-router-dom';
import cafe from '../../assets/cafe.png';
import { Secao } from './estilos';



const Novidades = () => {
  return (
    <Secao>
       <div className='div-textos'>
        <p className='texto1'>PREPARAÇÃO</p>
        <p className='texto2'>Níveis de torra</p>
        <p className='texto3'>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
        <Link to="https://www.starbucksathome.com/br/blog/De-onde-vem-o-cafe.html" target='blank'><button>Saiba mais</button></Link>

       </div>

       <div className='div-cafe'>
        <img src={cafe} alt="Café" className='Café'/>
      </div>



    </Secao>
   
  )
}

export default Novidades