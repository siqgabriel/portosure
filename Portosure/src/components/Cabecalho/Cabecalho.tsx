import { Link } from 'react-router-dom';
import Logo from '../../public/img/logo.png';
import Carro from '../../public/img/carro.svg';
import Menu from '../Menu/Menu';
import { Header } from '../../style/styled';

const Cabecalho = () => {
  return (
    <Header className="cabecalho">
      <div className='logo'>
        <Link to="/">
          <img src={Logo} alt="logo da Portosure" />
        </Link>
      </div>
      <div className="diag">
        <Link to="/diagnostico" className="botao-diag">
          <p>Comece seu diagnóstico</p>
          <div className="img-carro">
            <img src={Carro} alt="Carro" />
          </div>
        </Link>
      </div>
      <div className="menu-hamburguer">
        <Menu />
      </div>
    </Header>
  );
};

export default Cabecalho;