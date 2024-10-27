import styled from 'styled-components';
import BackgroundImagem from '../../public/img/background.png';
import ClienteImagem from '../../public/img/cliente.png';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: url(${BackgroundImagem}) no-repeat right top;
  background-size: 1200px;


  h1 {
    font-size: 30px;
    font-weight: 700;

  }

  label {
    font-size: 16px;
    margin: 10px 0;
  }

`;

export const LoginConteudo = styled.div`
  background: white;
  width: 60%;
  height: 50vh;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  box-shadow: 0px 0 5px 0px rgb(0, 0, 0);
  font-family: "Fira Code", monospace;


  @media (max-width: 575.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    padding: 20px 10px;
  }

  @media (min-width: 576px) and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    padding: 20px 10px;
  }
  

`

export const ColunaEsquerda = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 0 50px;

    @media (max-width: 575.98px) {
    align-items: center;
    width: 80%;
    font-size: 15px;
  }
`;

export const ColunaDireita = styled.div`
  flex: 1;
  background: url(${ClienteImagem}) no-repeat center top;
  background-size: 800px;
  border-radius: 0 30px 30px 0;

  @media (max-width: 575.98px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  border: 2px solid #00000000;
  background-color: #ededed;
  border-radius: 20px;
  box-shadow: 0px 0 1px 0px rgb(0, 0, 0);
  padding: 10px 0;
  margin-bottom: 10px;
  width: 500px;

    &:hover {
        border: 2px solid #3964fb;
    }

  @media (max-width: 575.98px) {
    width: 200px;
  }

  @media (min-width: 576px) {
    width: 300px;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  margin-top: 5px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Link = styled.a`
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const PopupContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  .Rodape {
    display: none;
  }

`;

export const PopupConteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 30%;
  height: 50vh;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  text-align: center;
  font-family: 'Fira Code', monospace;


  label {
    text-align: start;
    padding: 5px 0;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
    padding: 30px 0;
  }

  @media (max-width: 575.98px) {
    width: 300px;
    height: 530px;
  }

  @media (min-width: 576px) {
    width: 550px;
    height: 530px;
  }
`;

export const CloseButton = styled.button`
  position: fixed;
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
    width: 40px;
    height: 40px;
  }
`;

export const Rodape = styled.div`
  display: none;
`;