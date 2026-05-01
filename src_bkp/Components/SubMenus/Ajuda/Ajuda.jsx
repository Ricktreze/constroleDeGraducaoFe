import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
// import FormAjuda from './FormAjuda';
// import TableAssociado from './TableAssociado';
import './Ajuda.css';
// import TableAjuda from './TableAjuda';
// import { Button, Col, Form, Row } from 'react-bootstrap';

function Ajuda({ showModal, setShowModal }) {

  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [executaConsultaAjuda, setExecutaConsultaAjuda] = useState(0);
  const [graduacoesDe, setAjudaDe] = useState('2000-01-01');
  const [graduacoesAte, setAjudaAte] = useState('2050-01-01');
  const fechaModal = () => {
    setShowModal(false)
  }

  return (

    <>

      <Modal show={showModal} fullscreen={fullscreen} onHide={() => fechaModal()}>

        <Modal.Header className='modalHeader' data-bs-theme="dark" closeButton onClick={() => fechaModal()}>
          <Modal.Title className='modalTitulo' >Ajuda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='envolvimento'>
            Faixa branca
            1º grau com um mês de aula
            2º grau com dois meses de aula
            3º grau três meses após o 2º grau
            4º grau quatro meses após o 3 grau. Três meses para a faixa azul.

            Faixa azul
            Os quatro graus com intervalo de quatro meses de um para o outro. Após o 4º grau um intervalo de três meses para a faixa roxa.

            Faixa roxa
            Os quatro graus com intervalo de três meses de um para o outro. Após o 4º grau um intervalo de três meses para a faixa marrom

            Faixa marrom
            Os quatro graus com intervalo de três meses de um para o outro. Após o 4º grau um intervalo de três meses para a faixa preta

            Lembrando que para conquistar os graus os alunos devem ter uma frequência mínima de duas vezes na semana, os intervalos dos graus e faixas podem ser alterados conforme as presenças e nível técnico.

          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default Ajuda;