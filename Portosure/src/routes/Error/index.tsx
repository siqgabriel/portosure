
import { Reset } from "../../style/styled";
import { ErrorContainer, ErrorMessage, ErrorImage, BackButton } from './ErrorStyles';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import { Link } from 'react-router-dom';


export default function Error() {

  document.title = "Erro 404";

  return (
    <>
      <Cabecalho />
      <Reset />
        <ErrorContainer>
          <ErrorMessage>
            <h1>Erro 404 - Página não encontrada.</h1>
            <p>A página que você está procurando não existe ou foi movida.</p>
            <Link to="/">
              <BackButton>Voltar para Home</BackButton>
            </Link>
          </ErrorMessage>
          <ErrorImage />
        </ErrorContainer>
      <Rodape />
    </>
  );
}