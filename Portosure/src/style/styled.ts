
import styled, { createGlobalStyle } from "styled-components"
import BackgroundImagem from '../public/img/background.png';
import Apple from '../public/img/apple-store.png';
import Google from '../public/img/google-play.png';

export const Reset = createGlobalStyle`  
  /* Reset CSS */
  * {
    text-decoration: none;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }


  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    overflow-x: hidden;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Inter&display=swap");
`;


// Estilo Header

export const Header = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: 30% 40% 30%;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  font-family: "Fira Code", monospace;
  padding: 0 50px;
  box-shadow: 0px 0 10px 0px black;
  border-bottom: 1px rgb(165, 165, 165);

  .logo img {
    width: 250px;
  }

  .diag {
    width: 80%;
    display: flex;
    justify-content: center;
  }

  .diag img {
    width: 40px;
    padding: 10px;
    background-color: #ffffff00;
    filter: invert(77%) sepia(54%) saturate(547%) hue-rotate(151deg) brightness(97%) contrast(93%);

    &:hover {
      width: 27px;
    }
  }

  .botao-diag {
    width: 600px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    box-shadow: 0px 0 5px 0px rgb(0, 0, 0);
    width: 465px;
    height: 55px;
    border-radius: 50px;
    border: none;
    font-family: "Fira Code", monospace;
    background-color: #ffffff;
    cursor: pointer;
  }

  .botao-diag p {
    font-size: 20px;
    font-weight: 400;
    color: #7b7b7b;
  }

  @media (max-width: 575.98px) {
    display: grid;
    grid-template-columns: 40% 5% 55%;
    padding: 0 10px;

    .logo img {
      width: 150px;
      margin-left: 10px;
    }
    
    .botao-diag {
      position: absolute;
      margin-top: 50px;
      width: 310px;
      height: 50px;
      transform: translateX(20px);

      & p {
        font-size: 18px;
      }
    }
  }

  @media (min-width: 576px) and (max-width: 1100px) {
    display: grid;
    grid-template-columns: 45% 10% 45%;
    padding: 0 10px;

    .logo img {
      width: 200px;
      margin-left: 10px;
    }
    
    .botao-diag {
      position: absolute;
      margin-top: 50px;
      width: 400px;
      height: 50px;
      transform: translateX(20px);

      & p {
        font-size: 18px;
      }
    }
  }
`

// Estilizando o Rodapé
export const Footer = styled.footer`
  position: fixed;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: "Fira Code", monospace;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #7b7b7b;
  padding: 20px 50px;
  font-size: 10px;

  
  
  .rodape1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    border-top: 1px solid #7b7b7b;
  }
  
  .rodape1 a {
    text-decoration: none;
  }
  
  .menu-rodape li {
    display: inline;
    font-family: "Fira Code", monospace;
    font-size: 10px;
    color: #7b7b7b;
  }
  
  .redes-sociais ul {
    display: flex;
    justify-content: space-evenly;
    width: 100px;
  }
  
  .redes-sociais li {
    display: inline;
  }
  
  .redes-sociais img {
    width: 15px;
  }
  
  .logo-ideatec {
    width: 158px;
  }

  @media (max-width: 575.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #7b7b7b;

    p {
      font-size: 15px;
      text-align: center;
      padding: 15px 0;
    }

    li {
      padding: 15px 0;
    }
  }

  @media (min-width: 576px) and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #7b7b7b;

    p {
      font-size: 15px;
      text-align: center;
      padding: 15px 0;
    }

    li {
      padding: 15px 0;
    }
  }
`

export const MainContent = styled.main`
  padding: 0;
  margin: 0;
  box-sizing: border-box; 
  height: 120vh;

  @media (max-width: 575.98px) {
    height: 300vh;
  }

  @media (min-width: 576px) and (max-width: 1100px) {
    height: 200vh;
  }
`

// Estilizando o Principal
export const Main = styled.main`
  display: flex;
  flex-direction: row;
  background: url(${BackgroundImagem}) no-repeat right top;
  background-size: 1200px;
  height: 100vh;
  
  .sec-esquerda {
    width: 50%;
    padding: 100px 80px;
  }
  
  .sec-direita {
  width: 50%;
  padding: 100px 80px;
  }
  
  .div-esquerda {
  display: flex;
  flex-direction: column;
  width: 80%;
  }
  .div-esquerda h1 {
  font-family: "Fira Code", monospace;
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 20px;
  }
  
  .botao-ag {
    margin: 30px 0;
  }
  
  .botao-apple {
    margin-right: 20px;
    padding: 25px 80px;
    background: black url(${Apple}) no-repeat center;
    background-size: 150px;
    border-radius: 50px;
    cursor: pointer;
  }
  
  .botao-google {
    margin-left: 20px;
    padding: 25px 80px;
    background: black url(${Google}) no-repeat center;
    background-size: 150px;
    border-radius: 50px;
    cursor: pointer;
  }
  
  .div-esquerda p {
    font-family: "Inter", sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .div-direita {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 575.98px) {
    display: flex;
    flex-direction: column;
    height: 120vh;

    .sec-esquerda {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 60px 5px 10px;
    }

    .sec-direita {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 0px 00px;
    }

    .div-esquerda h1 {
      font-size: 25px;
      text-align: center;
    }

    .div-esquerda p {
      text-align: center;
    }

    .botao-ag {
      display: flex;
      justify-content: center;
    }

    .botao-apple {
      padding: 15px 60px;
      background-size: 100px;
    }

    .botao-google {
      padding: 15px 60px;
      background-size: 100px;
    }
  }

  @media (min-width: 576px) and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    height: 120vh;

    .sec-esquerda {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 60px 5px 10px;
    }

    .sec-direita {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 0px 00px;
    }

    .div-esquerda h1 {
      font-size: 25px;
      text-align: center;
    }

    .div-esquerda p {
      text-align: center;
    }

    .botao-ag {
      display: flex;
      justify-content: center;
    }

    .botao-apple {
      padding: 15px 60px;
      background-size: 100px;
    }

    .botao-google {
      padding: 15px 60px;
      background-size: 100px;
    }
  }
`


export const MinhaTabela = styled.table`
  border-collapse:collapse;
  border: 2px solid #ff0000;
  margin:0 auto;
  width: 70vw;
  font-size:24px;

  & a{
    text-decoration:none;
    color:#fff;
  }

  &
   thead{
    background-color:#514f4f;
     &
      th{
        border:2px solid #ff0000;
        color:#343030;
        text-align:left;
      }
   }

   &
    tbody{
      background-color:#514f4f;
      color:#fff;
       &
        td{
          border:2px solid #ff0000;
          text-align:center;
        }
    }

    &
      tfoot{
        background-color:#514f4f;
        text-align:center;
        color:#fff;
      }

      & tr:nth-child(odd){
        background-color:#e0aeae;
        color:#262525;
      }

      & tr:nth-child(even){
        background-color:#3a3636;
        color:#b8b4b4;
      }

      & tr:hover{
        background-color:#706a6a;
        color:#232121;
      }

`