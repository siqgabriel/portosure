import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, LoginConteudo, ColunaEsquerda, ColunaDireita, Form, Input, Checkbox, Button, Link, PopupContainer, PopupConteudo } from './LoginStyles';
import Cadastro from './Cadastros';

const Login = () => {

  document.title = "Login - Portosure";


  const [popupOpen, setPopupOpen] = useState(false);
  const [emailCadastro, setEmailCadastro] = useState('teste@email.com');
  const [senhaCadastro, setSenhaCadastro] = useState('senha123');
  const [emailLogin, setEmailLogin] = useState('');
  const [senhaLogin, setSenhaLogin] = useState('');
  const navigate = useNavigate();

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailLogin === emailCadastro && senhaLogin === senhaCadastro) {
      navigate('/areaDoCliente');
    } else {
      alert('E-mail ou senha incorretos.');
    }
  };

  return (
    <LoginContainer>
      <LoginConteudo>
        <ColunaEsquerda>
          <h1>Acesse a Plataforma</h1>
          <Form onSubmit={handleLoginSubmit}>
            <label>E-mail</label>
            <Input
              type="text"
              placeholder="Digite seu e-mail"
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
            />
            <label>Senha</label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={senhaLogin}
              onChange={(e) => setSenhaLogin(e.target.value)}
            />
            <Checkbox>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Lembre de mim</label>
            </Checkbox>
            <Button type="submit">Entrar</Button>
            <Link href="#" onClick={togglePopup}>Realize o seu cadastro!</Link>
          </Form>
        </ColunaEsquerda>
        <ColunaDireita />
      </LoginConteudo>
      {popupOpen && (
        <PopupContainer>
          <PopupConteudo>
            <Cadastro
              setPopupOpen={setPopupOpen}
              setEmailCadastro={setEmailCadastro}
              setSenhaCadastro={setSenhaCadastro}
            />
          </PopupConteudo>
        </PopupContainer>
      )}
    </LoginContainer>
  );
};

export default Login;