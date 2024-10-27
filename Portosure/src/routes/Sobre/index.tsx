import diagnosticoImg from '../../public/img/diagnostico.png';
import orcamentoImg from '../../public/img/orcamento.png';
import mapaImg from '../../public/img/mapa.png';
import graficoImg from '../../public/img/grafico.png';
import { Link } from 'react-router-dom';
import { PrincipalSobre, DivSobre, Container, Box, FaAngleRight } from './SobreStyles';

const Sobre = () => {

  document.title = "Sobre - Portosure";
  
  return (
    <PrincipalSobre>
      <section className="sec-principal">
        <DivSobre>
          <h2>Descubra oportunidades exclusivas com a PortoSure</h2>
          <Container>
            <Box className="box1">
              <h4>Diagnóstico</h4>
              <img src={diagnosticoImg} alt="Motor de carro sendo diagnosticado" />
              <p>
                Com o app da Portosure, você pode obter um diagnóstico prévio para problemas no seu carro!
                Basta responder algumas perguntas simples no formulário ou conversar com nosso chatbot, e
                vamos identificar possíveis causas para o seu problema. Prático, rápido e direto ao ponto!
              </p>
              <Link to="/diagnostico">Comece agora</Link>
              <FaAngleRight className="fa-solid fa-angle-right" />
            </Box>
            <Box className="box2">
              <h4>Orçamento</h4>
              <img src={orcamentoImg} alt="Calculadora" />
              <p>
                Após o diagnóstico prévio para os possíveis problemas no seu carro, você também recebe um
                orçamento detalhado! Após responder algumas perguntas, nosso sistema analisa e sugere o
                custo estimado para reparos. Simples, eficiente e sem surpresas!
              </p>
              <Link to="/diagnostico">Comece agora</Link>
              <FaAngleRight className="fa-solid fa-angle-right" />
            </Box>
            <Box className="box3">
              <h4>Mais funcionalidades</h4>
              <h5>Mapas de oficinas</h5>
              <img src={mapaImg} alt="Mapa de oficinas" />
              <h5>Gráfico de consumo</h5>
              <img src={graficoImg} alt="Gráfico de consumo" />
            </Box>
            <Link to="/premium">
              <Box className="box4">
                <h5>Torne-se PORTOSURE</h5>
                <h6>PREMIUM</h6>
              </Box>
            </Link>
          </Container>
        </DivSobre>
      </section>
    </PrincipalSobre>
  );
};

export default Sobre;
