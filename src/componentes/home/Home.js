import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//Importação do estilo definido com styled-component
import {MainEstilo} from './estilos';
/*
*
*
*
*****Importação dos copos pequenos******/
//Importação do copo laranja pequeno
import copo_laranja from '../../assets/copo_laranja.png';
//Importação do copo amarelo pequeno
import copo_amarelo from '../../assets/copo_amarelo.png';
//Importação do copo vermelho pequeno
import copo_vermelho from '../../assets/copo_vermelho.png';
/*
*
*
*
*****Importação dos copos grandes******/
//Importação do copo laranja grade
import copao_laranja from '../../assets/copao_laranja.png';
//Importação do copo amarelo grade
import copao_amarelo from '../../assets/copao_amarelo.png';
//Importação do copo vermelho grade
import copao_vermelho from '../../assets/copao_vermelho.png';
/*
*
*
*
*****Importação das ellipses******/
//Importação da ellipse verde
import ellipse_verde from '../../assets/ellipse_verde.png';
//Importação da ellipse amarela
import ellipse_amarela from '../../assets/ellipse_amarela.png';
//Importação da ellipse vermelha
import ellipse_vermelha from '../../assets/ellipse_vermelha.png';



export default function Home() {
  // Declaração dos estados
  let [padrao, setPadrao] = useState(copao_laranja); // Estado para a imagem padrão(Inicial)
  let [ellipse_padrao, setEllipsePadrao] = useState(ellipse_verde); // Estado para a imagem padrão(Inicial)
  let [laranja, setLaranja] = useState(copo_laranja); // Estado para a imagem laranja
  let [amarelo, setAmarelo] = useState(copo_amarelo); // Estado para a imagem laranja
  let [vermelho, setVermelho] = useState(copo_vermelho); // Estado para a imagem vermelha


  // Função que altera a imagem para copão laranha e ellipse verde
  const trocarLaranja = () => {
      if(laranja==copo_laranja){
        setPadrao(copao_laranja)
        setEllipsePadrao(ellipse_verde)      
      }

    };
  // Função que altera a imagem para copão amarelo e ellipse amarela
    const trocarAmarelo = () => {
        if(amarelo==copo_amarelo){
          setPadrao(copao_amarelo)
          setEllipsePadrao(ellipse_amarela)                
        }
    };
  // Função que altera a imagem para copão vermelho e ellipse vermelha
    const trocarVermelho = () => {
        if(vermelho==copo_vermelho){
          setPadrao(copao_vermelho)
          setEllipsePadrao(ellipse_vermelha)      
        }
    };


    /*
    setLaranja(laranja === copo_laranja ? copo_laranja : copo_laranja); // Alterna entre laranja e vermelho
    setPadrao(laranja === copo_laranja ? copo_laranja : copo_laranja); // Atualiza a imagem padrão com a imagem de laranja
      
  };

  const trocarAmarelo = () => {
    setAmarelo(setAmarelo === copo_amarelo ? copo_amarelo : copo_amarelo); // Alterna entre laranja e vermelho
    setPadrao(padrao === copo_amarelo ? copo_amarelo : copo_amarelo); // Atualiza a imagem padrão com a imagem de laranja
  };



  const trocarVermelho = () => {
    setVermelho(vermelho === copo_vermelho ? copo_vermelho : copo_vermelho); // Alterna entre laranja e vermelho
    setPadrao(padrao === copo_vermelho ? copo_vermelho : copo_vermelho); // Atualiza a imagem padrão com a imagem de laranja
  
*/


  return (
    <MainEstilo>
    

<section className='secao-textos'>
<div>
<p className='texto1'>Mais que Café</p>
<p className='texto2'>Isso  é <span>Starbucks</span></p>
</div>

<div><p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p></div>
<Link to="https://www.starbucksathome.com/br/blog.html" target='blank'><button>Saiba mais</button></Link>

</section>


<div className='cards'>
        <img 
          onClick={trocarLaranja} 
          src={laranja} 
          alt="Imagem laranja"
        />   
        <img 
          onClick={trocarAmarelo} 
          src={amarelo} 
          alt="Imagem vermelha"
        />      
      <img 
          onClick={trocarVermelho} 
          src={vermelho} 
          alt="Imagem vermelha"
        />
  </div>

     {/* Exibe a imagem de acordo com o estado de "padrao" */}
     <img src={padrao} alt="Imagem padrão" className='copao'/>
         <img src={ellipse_padrao} alt="" className='ellipse'/>
    
    </MainEstilo>
  );
}






