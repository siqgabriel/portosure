import { Footer } from "../../style/styled";
import Face from "../../public/img/facebook.svg";
import Insta from "../../public/img/instagram.svg";
import Linkedin from "../../public/img/linkedin.svg";
import Logo from "../../public/img/logo-ideatec.svg";

export default function Rodape() {
  return (
    <Footer className="rodape1">
      <p>Copyright © 2024 PORTOSURE Todos os direitos reservados.</p>
      <div className="redes-sociais">
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61559159571325"
              target="_blank">
              <img src={Face} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ideatec_tecnologia/"
              target="_blank">
              <img src={Insta} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://linktr.ee/ideatec_tecnologia"
              target="_blank">
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <img src={Logo} alt="Logo" className="logo-ideatec" />
    </Footer>
  );
}