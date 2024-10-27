import MenuHamburger from "./MenuHamburguer";
import { Hamburguer } from "./MenuHamburguerStyles";
import { Link } from "react-router-dom";

const routes = [
  { path: "/", label: "Home" },
  { path: "/sobre", label: "Sobre" },
  { path: "/diagnostico", label: "Diagnóstico" },
  { path: "/premium", label: "Premium" },
  { path: "/integrantes", label: "Integrantes" },
];
export default function Menu() {
  return (
    <Hamburguer>
      <div>
        <Link to="/login" className="area-do-cliente">Area do Cliente</Link>
      </div>
      <MenuHamburger routes={routes} />
    </Hamburguer>
  );
}