import styled from 'styled-components';

export const PagePremium = styled.div`
  height: 500px;

  .principal-sobre {
    margin: 50px 200px;

    @media (max-width: 1200px) {
      margin: 50px 100px;
    }

    @media (max-width: 992px) {
      margin: 50px 50px;
    }

    @media (max-width: 768px) {
      margin: 50px 20px;
    }

    @media (max-width: 576px) {
      margin: 50px 10px;
    }
  }
`;

export const ContainerPremium = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0 10px 0px rgb(0, 0, 0);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 576px) {
    padding: 20px;
  }
`;

export const BoxPremium = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
    border-radius: 20px;
    box-shadow: 0px 0 5px 0px rgb(0, 0, 0);
    margin: 25px 0;

    @media (max-width: 768px) {
      width: 70%;
    }

    @media (max-width: 576px) {
      width: 90%;
    }
  }

  h4 {
    font-family: "Fira Code", monospace;
    font-size: 25px;
    color: #3964fb;

    @media (max-width: 768px) {
      font-size: 22px;
    }

    @media (max-width: 576px) {
      font-size: 20px;
    }
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 17px;
    padding: 0 80px;

    @media (max-width: 768px) {
      font-size: 15px;
      padding: 0 40px;
    }

    @media (max-width: 576px) {
      font-size: 14px;
      padding: 0 20px;
    }
  }
`;