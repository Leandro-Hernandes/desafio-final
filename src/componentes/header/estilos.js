import styled from 'styled-components';


//Estilização da tag HEADER
export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-around;

//Estilização da tag NAV
nav{
    width: 60%;
    display: flex;
    align-items: center;
}
//Estilização da tag UL
ul{
    display: flex;    
    list-style: none;
    justify-content: space-around;
    width: 100%;
    padding:  0 20px;
}
//Estilização do Link
.link{
    text-decoration: none;
    color:#1E3932;
    font-size: 20px;    
}




/*Responsividade para dispositivos com telas até 1280px*/
@media(max-width:1280px){
//Estilização da tag NAV
nav{
     width: 70%;
     border: none;
     background-color: transparent;
    }
//Estilização da tag UL
    ul{
        width: 100%;
        justify-content: space-between;
        gap: 15px;
        border: none;
        background-color: transparent;
        flex-direction: column;        
    }
}


`