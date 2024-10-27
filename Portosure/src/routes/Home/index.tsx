import { Main } from "../../style/styled";
import Celular from "../../public/img/celular.png";

export default function Home() {

  document.title = "Home - Portosure";
  
  return (
    <Main>
      <section className="sec-esquerda">
        <div className="div-esquerda">
          <h1>Agilidade e Confiabilidade na palma da sua mão!</h1>
          <p>
            Conheça a plataforma que utiliza inteligência artificial para
            responder dúvidas, fornecer diagnósticos automotivos e indicar
            oficinas. Tudo isso sem intervenção humana! Nosso objetivo é
            oferecer rapidez, confiança e praticidade, simplificando o processo
            para você.
          </p>
          <div className="botao-ag">
            <a
              href="https://www.apple.com/br/app-store/"
              target="_blank"
              className="botao-apple"
            ></a>
            <a
              href="https://play.google.com/store/games?device=windows&&utm_source=latam_Med&utm_medium=hasem&utm_content=Dec1622&utm_campaign=Evergreen&pcampaignid=MKT-EDR-latam-br-1707532-Med-hasem-py-Evergreen-Dec1622-Text_Search_BKWS-id_102355_%7CEXA%7CONSEM_kwid_43700074755585158&gad_source=1&gclid=CjwKCAjwoa2xBhACEiwA1sb1BCF2P_8Y1Z2hLCe7pfEuPnko8zreNy74ZNOFyarEPe6EBdKS28vORhoCDvMQAvD_BwE&gclsrc=aw.ds"
              target="_blank"
              className="botao-google"
            ></a>
          </div>
        </div>
      </section>
      <div className="sec-direita div-direita">
        <img src={Celular} alt="Celular" />
      </div>
    </Main>
  );
}