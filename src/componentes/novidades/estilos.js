//Importação do styled-components
import styled from "styled-components";



//Estilização da section principal, que foi definida com styled-components
export const Secao = styled.section`
  background-color: #1e3932;
  color: white;
  display: flex;
  min-height: 90vh;
  padding: 10%;
//Estilizaçãpo da DIV que agrupa os parágrafos
  .div-textos{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center; 
    text-align: left;
    position: relative;
    width:50%;
    height: 470px;
    gap:15px;
    text-align: justify;
}
//Estilizaçãpo do primeiro parágrafo
.texto1{
font-family: Inter;
font-size: 24px;
font-weight: 700;
line-height: 29.05px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
}
//Estilizaçãpo do segundo parágrafo
.texto2{
font-family: Poppins;
font-size: 64px;
font-weight: 400;
line-height: 96px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;    
}
//Estilizaçãpo do terceiro parágrafo
.texto3{
font-family: Poppins;
font-size: 24px;
font-weight: 400;
line-height: 36px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
}  
//Estilizaçãpo da DIV que agrupa a imagem do grão de café
.div-cafe{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
//Estilizaçãpo da imagem do grão de café
.div-cafe img{
    width:80%;
    height: 80%;
}
//Estilizaçãpo da tag BUTTON
button{
    width: 150px;
    padding: 10px;
    background-color: #037143;
    border-radius: 40px;
    border:none;
    color: white;

    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
}
/*
*
*
*
/*Responsividade para dispositivos com telas até 1280px*/
@media(max-width:1280px){
//estilização da seção principal
padding: 10px;
flex-wrap: wrap;
position: relative;
height: 50vh;
//estilização da DIV que agrupa todos os textos
.div-textos{
width: 100%;
border: none;
font-size: 20px;
text-align: center;
}
//estilização da primeira tag P
.texto1{
font-size: 20px;
z-index: 1;
margin-top: 150px;
}
//estilização da segunda tag P
.texto2{
font-size: 30px;
z-index: 1;
}
//estilização da terceira tag P
.texto3{
z-index: 1;
text-align: center;
margin-bottom: 50px;
}
//estilização da imagem do café
.div-cafe img{
width:40%;
height: 30%;
position: absolute;
top:40px;
right: 10px;
}
//estilização do botão
button{
margin-left: 100px;
}
}
`
