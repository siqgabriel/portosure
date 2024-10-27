import styled from 'styled-components';
import BackgroundImagem from '../../public/img/background.png';

export const PrincipalInt = styled.main`
  width: 100%;
  padding-bottom: 30px;
  background: url(${BackgroundImagem}) no-repeat right top;
  background-size: 1200px;
  .sec-principal-int {
    height: 900px;
  }

  @media (max-width: 575.98px) {
    height: 1800px;

  }

  @media (min-width: 576px) and (max-width: 769px) {
    height: 1900px;
  }

`;

export const DivInt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;

  h2 {
    font-family: "Fira Code", monospace;
    font-size: 30px;
    font-weight: 700;
    padding: 70px;
  }

  h3 {
    font-family: "Fira Code", monospace;
    font-size: 30px;
    font-weight: 700;
    padding: 50px 0 20px;
  }

  a {
    font-family: "Fira Code", monospace;
    background-color: #3964fb;
    color: white;
  }

  @media (max-width: 575.98px) {
    h2 {
      text-align: center;
    }
    a {
      text-align: center;
    }
  }

`;

export const ContainerInt = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 40px;
  padding-bottom: 50px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const BoxInt = styled.div`
  height: 500px;
  background-color: #ffffff;
  box-shadow: 0px 0 10px 0px rgb(0, 0, 0);
  border-radius: 50px;
  text-align: center;
  padding: 20px;
  font-family: "Fira Code", monospace;
  font-size: 12px;
  font-weight: 300;

  ul {
    padding: 15px 0;
  }

  li {
    padding: 10px 0;
  }

  @media (max-width: 992px) {
    height: 400px;
    font-size: 11px;
  }

  @media (max-width: 768px) {
    height: auto;
    font-size: 10px;
  }
`;