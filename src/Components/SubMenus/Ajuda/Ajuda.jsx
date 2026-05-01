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
          <div className='regras'>
            
            <h5>Faixa branca</h5>
            <p>1º grau com um mês de aula.</p>
            <p>2º grau com dois meses de aula.</p>
            <p>3º grau três meses após o 2º grau.</p>
            <p>4º grau quatro meses após o 3º grau. </p>
            <p>Três meses para a faixa azul.</p>
            
            
            <h5>Faixa azul</h5>
            <p>Os quatro graus com intervalo de quatro meses de um para o outro.</p>
            <p>Após o 4º grau, um intervalo de três meses para a faixa roxa.</p>
            
            <h5>Faixa roxa</h5>
            <p>Os quatro graus com intervalo de três meses de um para o outro.</p>
            <p>Após o 4º grau, um intervalo de três meses para a faixa marrom.</p>
            
            <h5>Faixa marrom</h5>
            <p>Os quatro graus com intervalo de três meses de um para o outro.</p>
            <p>Após o 4º grau, um intervalo de três meses para a faixa preta.</p>

            <h6>
            <p>Lembrando que para conquistar os graus os alunos devem ter uma frequência mínima de duas vezes na semana.</p> 
            <p>Os intervalos dos graus e faixas podem ser alterados conforme as presenças e nível técnico.</p>
            </h6>
          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default Ajuda;