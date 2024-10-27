import styled from 'styled-components';
import Error404 from '../../public/img/erro404.svg';

export const ErrorContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column-reverse;
    height: 80vh;
  }
`;

export const ErrorMessage = styled.div`
  flex: 1;
  padding: 20px;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    font-family: 'Fira Code', monospace;
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
    font-family: 'Fira Code', monospace;
  }
`;

export const ErrorImage = styled.div`
  flex: 1;
  height: 600px;
  background: url(${Error404}) no-repeat center;
  background-size: 700px;

  @media (max-width: 1100px) {
    height: 100%;
    width: 100%;
    background: url(${Error404}) no-repeat center;
    background-size: 350px;
  }
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #00b9fd;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #274bb5;
  }
`;