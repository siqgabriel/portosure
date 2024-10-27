import styled from 'styled-components';
import BackgroundImagem from '../../public/img/background.png';
import HomemCarro from '../../public/img/homem-carro.png';

export const PrincipalDiag = styled.main`
  background: url(../assets/img/background.png) no-repeat right top;
  background-size: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: url(${BackgroundImagem}) no-repeat right top;
  background-size: 1200px;
`;

export const SecPrincipalDiag = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const DivDiag = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerDiag = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 578px);
  gap: 0px;
  padding-top: 50px;
  padding-bottom: 80px;
  justify-content: center;
  justify-items: center;
  align-items: center; 
  width: 100%;

  a {
    text-decoration: none;
  }

  @media (max-width: 575.98px) {
    display: flex;
    flex-direction: column-reverse;

  }

  @media (min-width: 576px) and (max-width: 1100px) {
    display: flex;
    flex-direction: column-reverse;
  }

`;

export const BoxDiag = styled.div`


`;

export const BoxDiag1 = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 0 5px 0px rgb(0, 0, 0);
  padding: 20px 40px;
  margin-bottom: 50px;
  border-radius: 20px;
  height: 500px;
  width: 100%;
  background: url(${HomemCarro}) no-repeat right top;
  background-size: 500px;


  a {
    background-color: #3964fb;
    padding: 15px 90px;
    font-family: "Fira Code", monospace;
    font-size: 15px;
    font-weight: 500;
    color: #ffffff;
    border: 2px solid #3964fb;
    border-radius: 30px;
    text-align: center;

    &:hover {
      background-color: #ffffff;
      font-size: 15px;
      color: #3964fb;
    }
  }
`;

export const BoxDiag2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 0 5px 0px rgb(0, 0, 0);
  padding: 20px 40px;
  margin-bottom: 50px;
  border-radius: 20px;
  height: 500px;
  width: 100%;
  background: #ffffff;
  background-size: 500px;

  h4 {
    font-family: "Fira Code", monospace;
    font-size: 25px;
    color: #3964fb;
  }

  @media (max-width: 575.98px) {
    width: 300px;
    padding: 20px 10px;

    h4 { 
      font-size: 20px
    }
  }

  @media (min-width: 576px) and (max-width: 1100px) {
    width: 450px;
    padding: 20px 10px;

    h4 { 
      font-size: 20px
    }
  }
`;

export const Form1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 240px);
  grid-template-rows: repeat(2, 20px);
  column-gap: 20px;
  padding-top: 30px;
  font-family: "Fira Code", monospace;
  font-size: 12px;
  color: #7b7b7b;

  ::placeholder {
    font-size: 8px;
    padding: 10px;
  }

  @media (max-width: 575.98px) {
    display: grid;
    grid-template-columns: repeat(2, 130px);
    grid-template-rows: repeat(2, 20px);
    column-gap: 20px;
  }

  @media (min-width: 576px) and (max-width: 1100px) {
    grid-template-columns: repeat(2, 200px);
    grid-template-rows: repeat(2, 20px);
  }

`;

export const Form2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 152px);
  grid-template-rows: repeat(2, 20px);
  column-gap: 20px;
  padding-top: 30px;
  font-family: "Fira Code", monospace;
  font-size: 12px;
  color: #7b7b7b;

  ::placeholder {
    font-size: 8px;
    padding: 10px;
  }

  @media (max-width: 575.98px) {
    display: grid;
    grid-template-columns: repeat(3, 80px);
  }

  @media (min-width: 576px) and (max-width: 1100px) {
    grid-template-columns: repeat(3, 125px);
  }
`;

export const Form3 = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 490px);
  padding-top: 30px;
  font-family: "Fira Code", monospace;
  font-size: 12px;
  color: #7b7b7b;

  label {
    padding-bottom: 10px;
  }

  ::placeholder {
    font-size: 8px;
    padding: 10px;
  }

  @media (max-width: 575.98px) {
    display: grid;
    grid-template-columns: repeat(1, 275px);
  }

  @media (min-width: 576px) and (max-width: 1100px) {
    grid-template-columns: repeat(1, 415px);
  }
`;

export const Input1 = styled.input`
  border: 2px solid #00000000;
  background-color: #ededed;
  border-radius: 20px;
  box-shadow: 0px 0 1px 0px rgb(0, 0, 0);
  padding: 15px 0;

  &:hover {
    border: 2px solid #3964fb;
  }
`;

export const InputMsg = styled.textarea`
  border: 2px solid #3963fb00;
  background-color: #ededed;
  border-radius: 20px;
  box-shadow: 0px 0 1px 0px rgb(0, 0, 0);
  padding: 60px 15px;
  margin-bottom: 20px;


  &:hover {
    border: 2px solid #3964fb;
  }
`;

export const SubmitButton = styled.button`
  font-size: 1rem;
  color: #fff;
  border: none;
  cursor: pointer;
  background-color: #ffffff00;
  width: 100%;
  padding: 10px 20px;

  &:hover {
    color: #3964fb;
  }
`;

export const BotaoEnvio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  border: 2px solid #3964fb;
  border-radius: 30px;
  font-family: "Fira Code", monospace;
  font-size: 17px;
  font-weight: 500;
  color: #3964fb;
  background-color: #3964fb;

  &:hover {
    background-color: #ffffff00;
    color: #3964fb;
  }
`;

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  padding: 60px 90px;
  border-radius: 15px;
  text-align: center;
  position: relative;
  height: 300px;
  font-family: "Fira Code", monospace;

  .documento {
    width: 50px;
    height: 50px;
    filter: invert(33%) sepia(82%) saturate(4123%) hue-rotate(223deg) brightness(102%) contrast(97%);
  }

  @media (max-width: 575.98px) {
    width: 80%;
    height: 350px;
    padding: 30px 60px;
  }

  @media (min-width: 576px) and (max-width: 1100px) {
    width: 80%;
    height: 350px;
    padding: 60px;
  }
`;

export const DownloadButton = styled.a`
  display: inline-block;
  width: 100%;
  margin-top: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #3964fb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #274bb5;
  }

`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  filter: invert(26%) sepia(46%) saturate(2809%) hue-rotate(337deg) brightness(103%) contrast(88%);

  &:hover {
    filter: invert(10%) sepia(61%) saturate(5848%) hue-rotate(355deg) brightness(109%) contrast(98%);
  }

  img {
    width: 20px;
    height: 20px;
  }
`;