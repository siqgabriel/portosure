import styled from 'styled-components';

export const Hamburguer = styled.div`
  display: flex;
  align-items: center;

  .area-do-cliente {
    display: block;
    font-family: "Fira Code", monospace;
    font-size: 10px;
    border: 5px #3964fb;
    background-color: #3964fb;
    border-radius: 30px;
    padding: 5px 5px;
    margin: 0 50px;
    color: white;
    filter: none;
    text-align: center;
    

    &:hover {
      background-color: #ffffff;
      color: #3964fb;
      border-color: #3964fb;

    }

  }
      
  li {
    margin: 20px 0;
  }
  
  .barras {
    background-color: #ffffff00;
    border: none;
  }

  .menu-button {
    display: flex;
    height: 120px;
    width: 300px;

  }

  .menu-button img {
    width: 30px;

    &:hover {
      width: 25px;
      filter: invert(76%) sepia(39%) saturate(508%) hue-rotate(141deg) brightness(91%) contrast(106%);
  }
  }

  .menu-hamburguer {
    background-color: #ffffff;
    position: absolute;
    padding: 20px 50px;
    margin-top: 110px;
    border-radius: 20px;
    transform: translateX(-50px);
    box-shadow: 0px 0 10px 0px black;


  }

  @media (max-width: 575.98px) {
    .area-do-cliente {
      position: absolute;
      padding: 5px 5px;
      margin-right: 0px;
      font-size: 10px;
      transform: translateX(-85px) translateY(-12px);
    }
    
    .menu-button {
      width: 5px;
      transform: translateX(60px);

      & img {
        width: 20px;
      }
    }

    .menu-hamburguer {
      padding: 10px 20px;
      margin-top: 100px;
      transform: translateX(-95px);


    }
  }
  @media (min-width: 576px) and (max-width: 1100px) {
    .area-do-cliente {
      position: absolute;
      padding: 5px 5px;
      margin-left: 10px;
      font-size: 10px;
      transform: translateX(-60px) translateY(-12px);
    }
    
    .menu-button {
      width: 5px;
      transform: translateX(60px);

      & img {
        width: 20px;
      }
    }

    .menu-hamburguer {
      padding: 10px 20px;
      margin-top: 100px;
      transform: translateX(-95px);
    }
  }

`;
