import { PopupContainer, PopupConteudo, CloseButton } from '../Login/LoginStyles';
import { Form, Input, Button } from './LoginStyles';
import React, { useState } from 'react';
import sairIcon from '../../public/img/sair.svg';

interface CadastroProps {
  setPopupOpen: (open: boolean) => void;
  setEmailCadastro: (email: string) => void;
  setSenhaCadastro: (senha: string) => void;
}

const Cadastro: React.FC<CadastroProps> = ({ setPopupOpen, setEmailCadastro, setSenhaCadastro }) => {
  const [email, setEmail] = useState('teste1@email.com');
  const [senha, setSenha] = useState('senha123');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');


  const handleCadastroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha !== confirmacaoSenha) {
      alert('As senhas não coincidem.');
      return;
    }
    setEmailCadastro(email);
    setSenhaCadastro(senha);
    setPopupOpen(false);
  };

  return (
    <PopupContainer>
      <PopupConteudo>
        <h2>Realize seu Cadastro</h2>
        <Form onSubmit={handleCadastroSubmit}>
          <label>E-mail</label>
          <Input
            type="email"
            placeholder="Digite o seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Senha</label>
          <Input
            type="password"
            placeholder="Crie a sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <label>Confirmação de Senha</label>
          <Input
            type="password"
            placeholder="Confirme a sua senha"
            value={confirmacaoSenha}
            onChange={(e) => setConfirmacaoSenha(e.target.value)}
          />
          <Button type="submit">Cadastrar</Button>
          <Button>Se torne premium</Button>
        </Form>
        <CloseButton type="button" onClick={() => setPopupOpen(false)} style={{ background: 'none', border: 'none', position: 'absolute', top: '10px', right: '10px' }}>
            <img src={sairIcon} alt="Fechar" />
        </CloseButton>
      </PopupConteudo>
    </PopupContainer>
  );
};

export default Cadastro;