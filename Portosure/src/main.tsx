import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import Error from './routes/Error/index.tsx';
import Home from './routes/Home/index.tsx';
import Sobre from './routes/Sobre/index.tsx';
import Diagnostico from './routes/Diagnostico/index.tsx';
import Premium from './routes/Premium/index.tsx';
import Integrantes from './routes/Integrantes/index.tsx';
import Login from './routes/Login/index.tsx';
import AreaDoCliente from './routes/AreaDoCliente/index.tsx';

//Criando rotas
const routes = createBrowserRouter([

  {
    path: "/", element: <App />, errorElement: <Error />, children: [
      { path: "/", element: <Home /> },
      {path: "/sobre", element: <Sobre />},
      {path: "/diagnostico", element: <Diagnostico />},
      {path: "/premium", element: <Premium />},
      {path: "/integrantes", element: <Integrantes />},
      {path: "/login", element: <Login />},
      {path: "/areaDoCliente", element: <AreaDoCliente />}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)




