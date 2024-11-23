import styled from "styled-components";

//Estilização da tag MAIN
export const MainEstilo = styled.main`
display: flex;
align-items: center;
flex-wrap: wrap;
position: relative;
min-height: 90vh;
flex-direction: column;
align-items: flex-start;
justify-content: center;


//Estilização da tag SECTION com a classe secao-textos
.secao-textos{
    display: flex;
    flex-direction: column;
   padding-left: 10%;
    text-align: left;
    position: relative;
    width:50%;
    height: 470px;
    gap:15px;
    text-align: justify;
}
//Estilização da img da ELLIPSE e do COPO GRANDEL
.ellipse, .copao{
    width: 40%;
    position: absolute;
    bottom: 0;
    right: 0;
}
//Estilização da imagem do COPO GRANDE
.copao{
    z-index: 1;
}
//Estilização da DIV cards
.cards{
    display: flex;
    justify-content: flex-end;
    width:50%;
    padding-left: 10%;
}
//Estilização com efeito HOVER das imagens dos COPOS PEQUENOS
.cards img:hover{
background-color: #037143;
transition:0.5s ;
//transform: rotate3d(0, 1, 0, 60deg);
transform: rotate3d(0, 0, 1, 15deg);
border-radius: 50%;
}
//Estilização da tag BUTTON
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

/*
    width: 150px;
    padding: 10px;
    background-color: #037143;
    border-radius: 40px;
    color: white;
    border:none;
    //margin-top: 100px;
}
*/
}
//Estiilização dos parágrafos primero(com a classe: texto1) e segundo(com a classe: texto2)
.texto1, .texto2{
    font-size: 50px;
}
//Estilização da tag SPAN
span{
font-family: Poppins;
font-size: 64px;
font-weight: 400;
line-height: 96px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
font-weight: bold;
color: #037143;
}

/*
*
*
*
/*Responsividade para dispositivos com telas até 1280px*/
@media(max-width:1280px){
    //Estlização da tag MAIN(MainEstilo)
    padding-top: 15px;
//Estlização da DIV com a classe CARDS
    .cards{ 
width: 70%;
}
//Estlização das imagens dos copos pequenos, dentro da DIV CARD
img{
    width: 40%;
}
//Estlização da seção dos textos
.secao-textos{
    width: 100%;
    height: 100%;
    padding: 0;
    border: none; 
    font-size: 20px;
}
//Estlização do primeiro e segundo parágrafo
.texto1, .texto2{
    font-size: 30px; 
}
//Estlização da tag SPAN, que destaca a palavra STARBUKS
span{
font-size: 40px;
font-weight: 400;
line-height: 96px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
font-weight: bold;
color: #037143;
//Estlização da ELLIPSE e do COPO GRANDE
.ellipse, .copao{
    bottom:0;
    right: 0;
    position: absolute;
    width: 70%;
}
}
//Estlização do COPO GRANDE
.copao{
    bottom: 20px;
}

}





/*

//estilização 728px

@media(max-width:768px){
    overflow: hidden;

.cards{ 
width: 70%;

}
img{
width: 40%;
}
.secao-textos{
width: 100%;
height: 100%;
padding: 10%;
border: none; 
font-size: 20px;
}
.texto1{
    margin-top: 0px;
}
.texto1, .texto2{
font-size: 30px;
}
span{
font-size: 40px;
font-weight: 400;
line-height: 96px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
font-weight: bold;
color: #037143;


.ellipse, .copao{
bottom:0;
right: 0;
position: absolute;
}



}



}
*/
`