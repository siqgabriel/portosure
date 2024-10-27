import { Main, Principal, Titulo, MenuHorizontal, Secundario, Paragrafo } from './AreaDoClienteStyles';

const Dashboard = () => {
  document.title = "Dashboard";
  
    return (
      <Main>
        <Principal>
          <Titulo>
            <h1>Seja Bem-Vindo!</h1>
          </Titulo>
          <MenuHorizontal>
            <a href="#">Diagnósticos</a>
            <a href="#">Agendamentos</a>
            <a href="#">Meus Veículos</a>
          </MenuHorizontal>
          <Secundario>
            <Paragrafo>
              <h2>Agilidade e Confiabilidade na palma da sua mão!</h2>
            </Paragrafo>
          </Secundario>
        </Principal>
      </Main>
    );
  };
  
  export default Dashboard;