import { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  DropdownItem,
  ListGroup,
  NavDropdown,
} from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./MenuLateral.css";
import BotaoMenu from "./BotaoMenu";

import Associado from "../SubMenus/CadastroAssociado/Associado";
import Consulta from "../SubMenus/CadastroConsulta/Consulta";
import Graduacoes from "../SubMenus/CadastroGraduacoes/Graduacoes";
import Ajuda from "../SubMenus/Ajuda/Ajuda";

function MenuLateral({ nomeMenu, setNomeMenu,autorizado,setAltorizado }) {
  const [show, setShow] = useState(false);
  const [subCadastro, setSubCadastro] = useState(false);
  const [subConsulta, setSubConsulta] = useState(false);
  const [subGraduacoes, setGraduacoes] = useState(false);
  const [subContas, setSubContas] = useState(false);
  const [subAcessorios, setSubAcessorios] = useState(false);
  const [subRegras, setSubRegras] = useState(false);
  const [subAjuda, setSubAjuda] = useState(false);
  const [nomeSubMenu, setNomeSubMenu] = useState("");
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const chamaComponente = (subMenu) => {
    setNomeSubMenu(subMenu);
    setShowModal(true)
  };

  const auxNomeMenu = (nome) => {
    setNomeMenu(nome);
    if (nome === "CADASTRO") {
      setSubCadastro(!subCadastro);
    } else if (nome === "PRESENCA") {
      setSubConsulta(!subConsulta);
    } else if (nome === "GRADUACOES") {
      setGraduacoes(!subGraduacoes);
    } else if (nome === "CONTAS") {
      setSubContas(!setSubContas);
    } else if (nome === "ACESSÓRIOS") {
      setSubAcessorios(!setSubAcessorios);
    } else if (nome === "REGRAS") {
      setSubRegras(!setSubRegras);
    } else if (nome === "AJUDA") {
      setSubAjuda(!setSubAjuda);
    }
  };

  return (
    <>
      <BotaoMenu handleShow={handleShow} />

      <Offcanvas className="offCanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item
              className="listGroup1"
              action
              onClick={() => {
                auxNomeMenu("CADASTRO");
              }}
            >
              <NavDropdown
                id="dropdown-button-drop-end"
                title="Cadastro"
                key="end"
                drop="centered"
                variant="secundary"                
              >
                <div className="lista">
                  <Dropdown.Item
                    className="dropdownAluno"
                    eventKey="1"
                    onClick={() => {
                      chamaComponente("ASSOCIADO");
                    }}
                  >
                    Aluno
                  </Dropdown.Item>
                 
                </div>
              </NavDropdown>
            </ListGroup.Item>
              <ListGroup.Item className="listGroup2" action
                onClick={() => {
                auxNomeMenu("PRESENCA");
              }}
              >
                <NavDropdown
                  id="dropdown-button-drop-end"
                  title="Consulta"
                  key="end"
                  drop="centered"
                  variant="secundary"                
                >
                  <div className="lista">
                    <Dropdown.Item
                      className="dropdownAluno"
                      eventKey="1"
                      onClick={() => {
                        chamaComponente("PRESENCA");
                      }}
                    >
                      Presença
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdownAluno"
                      eventKey="1"
                      onClick={() => {
                        chamaComponente("GRADUACOES");
                      }}
                    >
                      Graduações
                    </Dropdown.Item>
                  
                  </div>
                </NavDropdown>
           </ListGroup.Item>
            
            <ListGroup.Item className="listGroup7" action
            onClick={() => {
                        chamaComponente("AJUDA");
                      }}
            >
              Ajuda
            </ListGroup.Item>

           
            
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>

      {nomeSubMenu === "ASSOCIADO" && (
        <Associado showModal={showModal} setShowModal={setShowModal} />
      )
    
      }

      {nomeSubMenu === "PRESENCA" && (
        <Consulta showModal={showModal} setShowModal={setShowModal} />
      )
    
      }

      {nomeSubMenu === "GRADUACOES" && (
        <Graduacoes showModal={showModal} setShowModal={setShowModal} />
      )
    }
      {nomeSubMenu === "AJUDA" && (
        <Ajuda showModal={showModal} setShowModal={setShowModal} />
      )

      }

      
    </>
  );
    
}

export default MenuLateral;
