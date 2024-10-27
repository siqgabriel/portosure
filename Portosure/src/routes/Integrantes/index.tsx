
import gabrielImg from '../../public/img/gabriel.png';
import carlosImg from '../../public/img/carlos.png';
import pedroImg from '../../public/img/pedro.png';
import { PrincipalInt, DivInt, ContainerInt, BoxInt } from './IntegrantesStyles';

const Integrantes = () => {

  document.title = "Integrantes - IDEATEC";
  
  return (
    <PrincipalInt>
      <section className="sec-principal-int">
        <DivInt>
          <h2>Integrantes - IDEATEC</h2>
          <ContainerInt>
            <BoxInt className="box-int3">
              <img src={gabrielImg} alt="foto do integrante Gabriel" />
              <ul>
                <li>
                  <p><strong> NOME: </strong> Gabriel de Siqueira Agostinho </p>
                </li>
                <li>
                  <p><strong> RM: </strong> 555888 </p>
                </li>
                <li>
                  <p><strong> TURMA: </strong> 1TDSPV </p>
                </li>
                <li>
                  <p>
                    <strong> LINK: </strong>
                    <a href="https://github.com/siqgabriel" target="_blank" rel="noopener noreferrer">
                      https://github.com/siqgabriel
                    </a>
                  </p>
                </li>
              </ul>
            </BoxInt>
            <BoxInt className="box-int2">
              <img src={carlosImg} alt="foto da integrante Carlos" />
              <ul>
                <li>
                  <p><strong> NOME: </strong> Carlos Eduardo Rodrigues Coelho Pacheco </p>
                </li>
                <li>
                  <p><strong> RM: </strong> 557323 </p>
                </li>
                <li>
                  <p><strong> TURMA: </strong> 1TDSPV </p>
                </li>
                <li>
                  <p>
                    <strong>LINK: </strong>
                    <a href="https://github.com/cadupacheco" target="_blank" rel="noopener noreferrer">
                      https://github.com/cadupacheco
                    </a>
                  </p>
                </li>
              </ul>
            </BoxInt>
            <BoxInt className="box-int1">
              <img src={pedroImg} alt="foto do integrante Pedro" />
              <ul>
                <li>
                  <p><strong> NOME: </strong> Pedro Augusto Costa Ladeira </p>
                </li>
                <li>
                  <p><strong> RM: </strong> 558514 </p>
                </li>
                <li>
                  <p><strong> TURMA: </strong> 1TDSPV </p>
                </li>
                <li>
                  <p>
                    <strong> LINK: </strong>
                    <a href="https://github.com/Pedro-Ladeira" target="_blank" rel="noopener noreferrer">
                      https://github.com/Pedro-Ladeira
                    </a>
                  </p>
                </li>
              </ul>
            </BoxInt>
          </ContainerInt>
          <h3> REPOSITÓRIO </h3>
          <a
            href="https://github.com/IDEATEC-1TDSPV/Portosure.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/IDEATEC-1TDSPV/Portosure.git
          </a>
        </DivInt>
      </section>
    </PrincipalInt>
  );
};

export default Integrantes;