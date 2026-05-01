import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FloatingLabel, Form } from "react-bootstrap";
import "./DescricaoProcesso.css";

function DescricaoProcesso({
  modalIsOpen,
  closeModal,
  detalheProcesso,
  nomeProcessoClicado,
}) {
  function fecharModal() {
    closeModal(false);
  }

  const [cardIsOpen, setCardIsOpen] = useState(false);

  function openCard() {
    setCardIsOpen(true);
  }

  const closeCard = () => {
    setCardIsOpen(false);
  };

  return (
    <>
      {modalIsOpen && (
        <div className="modal show" style={{ display: "block" }}>
          <Modal.Dialog>
            <Modal.Header>
              <div className="editPosition">
              <Modal.Title>{nomeProcessoClicado}</Modal.Title>
              <div className="edit">
                <Button className="editarBtn" variant="outline-primary">
                  <i className="bi bi-pencil-square"></i>
                </Button>
                <Button className="excluirBtn" variant="outline-primary">
                  <i className="bi bi-trash3"></i>
                </Button>
              </div>
              </div>
            </Modal.Header>

            <Modal.Body>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Descrição do Processo:"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "370px" }}
                  disabled
                  readOnly
                  value={detalheProcesso}
                />
              </FloatingLabel>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={fecharModal}>
                Fechar
              </Button>

              <Button variant="primary">Salvar</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </>
  );
}

export default DescricaoProcesso;
