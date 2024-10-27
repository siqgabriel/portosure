import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import { MainContent } from "./style/styled";
import { Reset } from "./style/styled";


export default function App() {
  return (
    <div>
      <Reset />
      <Cabecalho />
      <MainContent>
        <Outlet />
      </MainContent>
      <Rodape />
    </div>
  );
}
