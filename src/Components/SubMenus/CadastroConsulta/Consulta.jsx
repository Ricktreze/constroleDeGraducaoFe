import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Consulta.css';
import { Button, Col, Form, ModalBody, Row } from 'react-bootstrap';
import TablePresenca from './TablePresenca';
import FormConsulta from './FormConsulta';

function Consulta({ showModal, setShowModal }) {

  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [nomeAssociado, setNomeAssociado] = useState("");
  const [associado, setAssociado] = useState(null);
  const [indiceAssociado, setIndiceAssociado] = useState(0);


  const fechaModal = () => {
    setShowModal(false)
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
                  setExecutaConsultaPresenca={setExecutaConsultaPresenc}
                  presencaDe={presencaD}
                  setPresencaDe={setPresencaD}
                  presencaAte={presencaAte}
                  setPresencaAte={setPresencaAt}
              />
            </div>
            <div className="divContPesquisaTable">
              <div className='pesquisa'>
                <Form.Control
                  type="text"
                  placeholder="Pesquisa (código ou nome)"
                  className=" mr-sm-2"
                  value={nomeAssociado}
                // onChange={handleSearch}
                />
              </div>

              <div className='divTable'>
                <TablePresenca className='table' />
              </div>

            </div>
          </div>





        </Modal.Body>
      </Modal>
    </>
  )
}

export default Consulta;