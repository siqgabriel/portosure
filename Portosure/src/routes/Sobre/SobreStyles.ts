import styled from 'styled-components';
import BackgroundImagem from '../../public/img/background.png';

export const PrincipalSobre = styled.main`
  padding: 50px 0;
  background: url(${BackgroundImagem }) no-repeat right top;
  background-size: 1200px;
  width: 100%;
`;

export const DivSobre = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 800px;

  h2 {
    font-family: "Fira Code", monospace;
    font-size: 25px;
    text-align: center;
    width: 40%;
    font-weight: 700;
  }

  @media (max-width: 575.98px) {
    h2 {
      width: 90%;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  grid-template-rows: repeat(2, 180px);
  gap: 40px;
  padding-top: 50px;
  padding-bottom: 80px;

  a {
    text-decoration: none;
  }

  :nth-child(1) {
    grid-row: 1 / 4;

  }

  :nth-child(2) {
    grid-row: 1 / 4;

  }

  :nth-child(4) {
    grid-column: 3;

  }

  @media (max-width: 575.98px) {
    display: grid;
    grid-template-columns: repeat(2, 45%);
    grid-template-rows: repeat(1,80%);
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 450px;
    
  


    :nth-child(1) {
      grid-row: 1 / 2;
      font-size: 9px;

    }

    :nth-child(2) {
      grid-row: 1 / 2;
      font-size: 9px;

    }

    :nth-child(3) {
      grid-row: 2;
      align-content: center;  
      
    }

    :nth-child(4) {
      grid-column: 2;

      & .box4 { 
        height: 100%;
        margin-top: 0;
        padding: 10px;

        & h6 {
          font-size: 70px;
          word-wrap: break-word;
          font-weight: 700;
        }
      }
    }

  }
  @media (min-width: 576px) and (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, 45%);
    grid-template-rows: repeat(1,80%);
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 450px; 


    :nth-child(1) {
      grid-row: 1 / 2;
      font-size: 9px;

    }

    :nth-child(2) {
      grid-row: 1 / 2;
      font-size: 9px;

    }

    :nth-child(3) {
      grid-row: 2;
      align-content: center;  
      
    }

    :nth-child(4) {
      grid-column: 2;

      & .box4 { 
        height: 100%;
        margin-top: 0;
        padding: 10px;

        & h6 {
          font-size: 100px;
          word-wrap: break-word;
          font-weight: 700;
        }
      }
    }
  }
`;

export const Box = styled.div`
  background-color: white;
  box-shadow: 0px 0 5px 0px rgb(0, 0, 0);
  border-radius: 20px;
  padding: 20px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  padding: 20px 20px 20px 20px;

  h4 {
    font-family: "Fira Code", monospace;
    font-size: 20px;
    padding-bottom: 20px;
    color: #3964fb;
  }

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0 3px 0px rgb(0, 0, 0);
  }

  a {
    font-family: "Fira Code", monospace;
    font-size: 16px;
    padding: 10px 0;
    color: #3964fb;
    text-decoration: underline;
  }


  &.box3 {
    height: 260px;

    img {
      height: 30%;
      margin-top: 5px;
    }

    h5 {
      font-family: "Fira Code", monospace;
      font-size: 12px;
      color: #7b7b7b;
      padding-top: 8px;
    }
  }

  &.box4 {
    margin-top: 50px;
    height: 120px;
    background-color: #3964fb;

    h5 {
      font-family: "Fira Code", monospace;
      color: #ffffff;
      font-size: 14px;
    }

    h6 {
      font-family: "Fira Code", monospace;
      color: #ffffff;
      font-size: 70px;
      height: 0;
      padding-bottom: 80px;
    }
   
  }
`;

export const FaAngleRight = styled.i`
  color: #3964fb;
`;