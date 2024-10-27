
import mecanicoImg from '../../public/img/mecanico.png';
import { PagePremium ,ContainerPremium, BoxPremium} from './PremiumStyles';
import { Main } from '../../style/styled';

const Premium = () => {

  document.title = "Premium - Portosure";

  return (
    <Main>
        <PagePremium>
            <main className="principal-sobre">
            <section className="sec-principal">
                <div className="div-sobre">
                <ContainerPremium>
                    <BoxPremium>
                    <h4>PREMIUM</h4>
                    <img src={mecanicoImg} alt="Mecanico" />
                    <p>
                        A plataforma PORTOSURE na versão paga, trás diversas funcionalidades para
                        que nossos clientes possam acompanhar de perto as necessidades do seu
                        veiculo, assim prevenindo custos e problemas que possam aparecer. Nós
                        disponibilizaremos a versão paga com uma taxa mensal ou para assegurados
                        Porto Seguro. Conheça os benefícios:
                        <br />
                        <br />
                        O cliente terá o benefício de um motoqueiro
                        mecânico ir à sua residência com poucos dias
                        de espera ou até no mesmo dia para checar o
                        seu veículo, tendo a melhor visualização do
                        diagnóstico ou para serviços básicos como:
                        troca de óleo, troca de pneu, revisão geral etc.
                        <br />
                        <br />
                        O cliente terá a sua disposição um caminhão
                        guincho caso necessário.
                    </p>
                    </BoxPremium>
                </ContainerPremium>
                </div>
            </section>
        </main>
        </PagePremium>
    </Main>
  );
};

export default Premium;
