import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { PrincipalDiag ,SecPrincipalDiag, DivDiag, ContainerDiag,BoxDiag, BoxDiag1, BoxDiag2, Form1, Form2, Form3, Input1, InputMsg, SubmitButton, Popup, PopupContent, DownloadButton, BotaoEnvio, CloseButton } from './DiagnosticoStyles';
import sairIcon from '../../public/img/sair.svg';
import docuemntoIcon from '../../public/img/documento.svg';

export default function Diagnostico() {

  document.title = "Diagnóstico";
  
  const [showPopup, setShowPopup] = useState(false);
  const [fileUrl, setFileUrl] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const tipo = (form.elements.namedItem('tipo') as HTMLInputElement).value;
    const marca = (form.elements.namedItem('marca') as HTMLInputElement).value;
    const modelo = (form.elements.namedItem('modelo') as HTMLInputElement).value;
    const ano = (form.elements.namedItem('ano') as HTMLInputElement).value;
    const placa = (form.elements.namedItem('placa') as HTMLInputElement).value;
    const problema = (form.elements.namedItem('problema') as HTMLInputElement).value;

    const content = `Tipo de veículo: ${tipo}\nMarca: ${marca}\nModelo: ${modelo}\nAno: ${ano}\nPlaca: ${placa}\nProblema: ${problema}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    setFileUrl(url);
    setShowPopup(true);

    // Salvar o arquivo na pasta GerarDiagnostico
    saveAs(blob, 'diagnostico.txt');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <PrincipalDiag>
        <SecPrincipalDiag>
          <DivDiag>
            <ContainerDiag>
              <BoxDiag>
                <div className='BoxDiag1'>
                  <BoxDiag1>
                    <Link to="/sobre">SOBRE</Link>
                  </BoxDiag1>
                </div>
              </BoxDiag>
              <BoxDiag>
                <BoxDiag2>
                  <h4>COMECE SEU DIAGNÓSTICO</h4>
                  <form onSubmit={handleSubmit}>
                    <Form1 className='form-1'>
                      <label>Tipo de veículo</label>
                      <label>Marca</label>
                      <Input1 type="text" name="tipo"id="inputCarro" placeholder="Ex: Carro" />
                      <Input1 type="text" name="marca" id="inputMarca" placeholder="Ex: Ford" />
                    </Form1>
                    <Form2>
                      <label>Modelo</label>
                      <label>Ano</label>
                      <label>Placa</label>
                      <Input1 type="text" name="modelo" id="inputModelo" placeholder="Ex: Ká" />
                      <Input1 type="text" name="ano" id="inputAno" />

                      <Input1 type="text" name="placa" id="inputPlaca" placeholder="Ex: DCP5578" />
                    </Form2>
                    <Form3>
                      <label>Descreva o problema do seu carro</label>
                      <InputMsg as="textarea" name="problema" id="inputProblema" placeholder="Digite a sua mensagem..." />
                    </Form3>
                    <BotaoEnvio>
                      <SubmitButton type="submit">ENVIAR</SubmitButton>
                    </BotaoEnvio>
                  </form>
                </BoxDiag2>
              </BoxDiag>
            </ContainerDiag>
          </DivDiag>
        </SecPrincipalDiag>
      </PrincipalDiag>
      {showPopup && (
        <Popup>
          <PopupContent>
            <CloseButton onClick={handleClosePopup}>
              <img src={sairIcon} alt="Sair" className='botao-sair' />
            </CloseButton>
            <img src={docuemntoIcon} alt="Documento" className='documento'/>
            <p>Diagnóstico gerado com sucesso!</p>
            <DownloadButton href={fileUrl} download="diagnostico.txt">Baixar</DownloadButton>
            <DownloadButton href="#">Salvar no Perfil</DownloadButton>
          </PopupContent>
        </Popup>
      )}
    </>
  );
}