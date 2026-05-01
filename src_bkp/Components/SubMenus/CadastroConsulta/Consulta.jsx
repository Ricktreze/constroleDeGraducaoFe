import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Consulta.css';
import { Button, Col, Form, ModalBody, Row } from 'react-bootstrap';
import TablePresenca from './TablePresenca';
import FormConsulta from './FormConsulta';

function Consulta({showModal, setShowModal}) {

  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);

     const fechaModal = () =>{
    setShowModal(false)
  }

  return(
    <>

      <Modal show={showModal} fullscreen={fullscreen} onHide={() => fechaModal()}>
       <Modal.Header className='modalHeader' data-bs-theme="dark" closeButton onClick={() => fechaModal() }>
          <Modal.Title className='modalTitulo'>Presenças</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='consulta'>
            <div className='divPesquisa'>
             <TablePresenca/>
            </div>
            <div className='divFormConsulta'>
              <FormConsulta />
            </div>
          </div>
          
        </Modal.Body>
      </Modal>
   </>
  )
}

export default Consulta;