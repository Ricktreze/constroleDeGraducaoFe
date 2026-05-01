import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import DescricaoProcesso from "./DescricaoProcesso";
import { Form } from "react-bootstrap";

function ProcessoImportacao({ nome }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [qtd, setQtd] = useState(null);

  const [card2, setCard2] = useState(null);
  const [nomeProcessoClicado, setNomeProcessoClicado] = useState(null);
  const [detalhe, setDetalhe] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (nomeAux, detalhe) => {
    setModalIsOpen(true);
    setNomeProcessoClicado(nomeAux);
    setDetalhe(detalhe);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // const deletarCard = () => {

  //   fetch("http://predador:4001/api/card1One?nomeCard1=" + nome)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setCard1One(result);
  //     })      
  //     .catch((error) => console.error("Erro ao buscar card", error));
  

  // };

  // useEffect(() => {
  //   const consultaQtd = async () => {
  //     fetch("http://predador:4001/api/consultaQuantidade?nomeCard1=" + nome)
  //       .then((response) => response.json())
  //       .then((result) => setQtd(result))
  //       .catch((error) => console.error("Erro ao buscar usuários", error));
  //   };
  //   consultaQtd();

  //   async function consultaCard2() {
  //     fetch("http://predador:4001/api/card2?nomeCard1=" + nome)
  //       .then((response) => response.json())
  //       .then((result) => setCard2(result))
  //       .catch((error) => console.error("Erro ao buscar usuários", error));
  //   }
  //   consultaCard2();
  // }, []);

  return (
    <div>
      <Card.Body>
        <Card.Title className="cardTitle">{nome}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
        {/* <Card.Text className="cardText">Qnt. Processos: {qtd}</Card.Text> */}
        <div className="cardButtons">
          {/* <Button variant="primary" onClick={deletarCard}> Deletar </Button> */}
          <Button variant="primary" onClick={handleShow}>Acessar Rotina</Button>
        </div>
      </Card.Body>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Código"
              className="me-2"
              aria-label="Search"
            />
            <Form.Control
              type="text"
              placeholder="Nome"
              className="me-2"
              aria-label="Search"
            />
            <Form.Control
              type="text"
              placeholder="CNPJ"
              className="me-2"
              aria-label="Search"
            />
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary">Salvar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProcessoImportacao;
