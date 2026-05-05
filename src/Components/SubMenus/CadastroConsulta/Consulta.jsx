import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Consulta.css';
import { Button, Col, Form, ModalBody, Row } from 'react-bootstrap';
import TablePresenca from './TablePresenca';
import FormConsulta from './FormConsulta';

function Consulta({ showModal, setShowModal }) {

  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [nomeAluno, setNomeAluno] = useState("");
  const [executaConsultaPresenca, setExecutaConsultaPresenca] = useState(0);
  const [presencaDe, setPresencaDe] = useState('');
  const [presencaAte, setPresencaAte] = useState('');

  const fechaModal = () => {
    setShowModal(false)
  }

  const fieldChange = (e) => {
    console.log("nomeAluno",nomeAluno)
    eval(`set${e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)}(e.target.value)`)
    setExecutaConsultaPresenca(executaConsultaPresenca + 1)
  }

  return (
    <>

      <Modal show={showModal} fullscreen={fullscreen} onHide={() => fechaModal()}>
        <Modal.Header className='modalHeader' data-bs-theme="dark" closeButton onClick={() => fechaModal()}>
          <Modal.Title className='modalTitulo'>Presenças</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='aluno'>
            <div className='divForm'>
              <FormConsulta className='form'
                executaConsultaPresenca={executaConsultaPresenca}
                setExecutaConsultaPresenca={setExecutaConsultaPresenca}
                presencaDe={presencaDe}
                setPresencaDe={setPresencaDe}
                presencaAte={presencaAte}
                setPresencaAte={setPresencaAte}
              />
            </div>
            <div className="divContPesquisaTable">
              <div className='pesquisa'>
                <Form.Control
                  type="text"
                  placeholder="Pesquisa (código ou nome)"
                  className=" mr-sm-2"
                  value={nomeAluno}
                  onChange={fieldChange}
                  name="nomeAluno"
                />
              </div>

              <div className='divTable'>
                <TablePresenca className='table'
                  executaConsultaPresenca={executaConsultaPresenca}
                  setExecutaConsultaPresenca={setExecutaConsultaPresenca}
                  presencaDe={presencaDe}
                  setPresencaDe={setPresencaDe}
                  presencaAte={presencaAte}
                  setPresencaAte={setPresencaAte}
                  nomeAluno={nomeAluno}
                  setNomeAluno={setNomeAluno}
                />
              </div>

            </div>
          </div>





        </Modal.Body>
      </Modal>
    </>
  )
}

export default Consulta;