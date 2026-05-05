import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FormGraduacoes from './FormGraduacoes';
// import TableAssociado from './TableAssociado';
import './Graduacoes.css';
import TableGraduacoes from './TableGraduacoes';
import { Button, Col, Form, Row } from 'react-bootstrap';

function Graduacoes({ showModal, setShowModal }) {

  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [executaConsultaGraduacoes, setExecutaConsultaGraduacoes] = useState(0);
  const [graduacoesDe, setGraduacoesDe] = useState('2000-01-01');
  const [graduacoesAte, setGraduacoesAte] = useState('2050-01-01');
  const [nomeAluno, setNomeAluno] = useState("");
  const fechaModal = () => {
    setShowModal(false)
  }


  const fieldChange = (e) => {
    eval(`set${e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)}(e.target.value)`)
    setExecutaConsultaGraduacoes(executaConsultaGraduacoes+1)
  }

  return (

    <>

      <Modal show={showModal} fullscreen={fullscreen} onHide={() => fechaModal()}>

        <Modal.Header className='modalHeader' data-bs-theme="dark" closeButton onClick={() => fechaModal()}>
          <Modal.Title className='modalTitulo' >Graduações</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='envolvimento'>

            <div className='divPesquisa'>
              <div className='pesquisa'>
                <Form.Control
                  type="text"
                  placeholder="Pesquisa (código ou nome)"
                  className=" mr-sm-2"
                  name="nomeAluno"
                  value={nomeAluno}
                  onChange={fieldChange}
                />
              </div>
              <TableGraduacoes
                setExecutaConsultaGraduacoes={setExecutaConsultaGraduacoes}
                executaConsultaGraduacoes={executaConsultaGraduacoes}
                graduacoesDe={graduacoesDe}
                graduacoesAte={graduacoesAte}
                setGraduacoesDe={setGraduacoesDe}
                setGraduacoesAte={setGraduacoesAte}
                nomeAluno={nomeAluno}
                setNomeAluno={setNomeAluno}
              />
            </div>
            <div className='divCadastros'>
              <FormGraduacoes
                setExecutaConsultaGraduacoes={setExecutaConsultaGraduacoes}
                executaConsultaGraduacoes={executaConsultaGraduacoes}
                graduacoesDe={graduacoesDe}
                graduacoesAte={graduacoesAte}
                setGraduacoesDe={setGraduacoesDe}
                setGraduacoesAte={setGraduacoesAte}
              />
            </div>
          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default Graduacoes;