import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FormAluno from './FormAluno';
import TableAssociado from './TableAssociado';
import './Associado.css';
import { Button, Col, Form, Row } from 'react-bootstrap';

function Associado({ showModal, setShowModal }) {
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [associado, setAssociado] = useState(null);
  const [associadoDe, setAssociadoDe] = useState(150);
  const [idAluno, setidAluno] = useState(null);
  const [associadoAte, setAssociadoAte] = useState(160);
  const [executaConsultaAssociado, setExecutaConsultaAssociado] = useState(0);
  const [indiceAssociado, setIndiceAssociado] = useState(0);
  const [nomeAssociado, setNomeAssociado] = useState("");
  const [handleSearchControl, setHandleSearchControl] = useState(false)
  // var handleSearchControl = false
  const [id, setId] = useState(null)
  const [nomealuno, setNomealuno] = useState(null)
  const [idade, setIdade] = useState(null)
  const [faixa, setFaixa] = useState(null)
  const [grau, setGrau] = useState(null)
  const [dataInicio, setDataInicio] = useState(null)
  const [dataUltimaGraduacao, setDataUltimaGraduacao] = useState(null)
  const [dataProximaGraduacao, setDataProximaGraduacao] = useState(null)
  const [observacoes, setObservacoes] = useState(null)
  const [status, setStatus] = useState(null)
  const [sexo, setSexo] = useState(null)

  const fechaModal = () => {
    setShowModal(false)
  }
  const atualizaHandleSearchControl = (operac) => {
    setHandleSearchControl(operac)

  }

  const handleSearch = (event) => {
    setNomeAssociado(event.target.value)
    atualizaHandleSearchControl(true)
    if (associado.length != 0) {
      setExecutaConsultaAssociado(executaConsultaAssociado + 1)
    }
    if (event.target.value === "") {
      atualizaHandleSearchControl(false)
      setAssociadoAte(100)
    }
  }

  const atualizaAssociado = (result) => {
    
    setAssociado(result);
   

  }

  useEffect(() => {

    function consultaAssociado() {
      let url = ""
    
      if (!handleSearchControl) {
        url = `https://controle-de-graduacao.onrender.com/api/aluno`
      } else {
        url = `https://controle-de-graduacao.onrender.com/api/alunoNome?nomealuno=${nomeAssociado}`
      }
      fetch(url)
        .then((response) => response.json())
        .then((result) => {

          atualizaAssociado(result);
        })
        .catch((error) => console.error("Erro ao buscar card", error));

    }
    consultaAssociado()

  }, [handleSearchControl, executaConsultaAssociado]);

  return (
    <>

      <Modal show={showModal} fullscreen={fullscreen} onHide={() => fechaModal()}>

        <Modal.Header className='modalHeader' data-bs-theme="dark" closeButton onClick={() => fechaModal()}>
          <Modal.Title className='modalTitulo' >Cadastro de Aluno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {associado != null &&
            <div className='associado'>
              <div className='divForm'>
                <FormAluno className='form'
                  associado={associado}
                  setAssociado={setAssociado}
                  indiceAssociado={indiceAssociado}
                  executaConsultaAssociado={executaConsultaAssociado}
                  setExecutaConsultaAssociado={setExecutaConsultaAssociado}
                  setId={setId}
                  id={id}
                  setNomealuno={setNomealuno}
                  nomealuno={nomealuno}
                  setIdade={setIdade}
                  idade={idade}
                  setFaixa={setFaixa}
                  faixa={faixa}
                  setGrau={setGrau}
                  grau={grau}
                  setDataInicio={setDataInicio}
                  dataInicio={dataInicio}
                  setDataUltimaGraduacao={setDataUltimaGraduacao}
                  dataUltimaGraduacao={dataUltimaGraduacao}
                  setDataProximaGraduacao={setDataProximaGraduacao}
                  dataProximaGraduacao={dataProximaGraduacao}
                  setObservacoes={setObservacoes}
                  observacoes={observacoes}
                  setStatus={setStatus}
                  status={status}
                  setSexo={setSexo}
                  sexo={sexo}
                />
              </div>
              <div className="divContPesquisaTable">
                <div className='pesquisa'>

                  <Form.Control
                    type="text"
                    placeholder="Pesquisa (código ou nome)"
                    className=" mr-sm-2"
                    value={nomeAssociado}
                    onChange={handleSearch}
                  />

                </div>

                <div className='divTable'>
                  <TableAssociado className='table'
                    associado={associado}
                    setAssociado={setAssociado}
                    indiceAssociado={indiceAssociado}
                    setIndiceAssociado={setIndiceAssociado}
                  />
                </div>

              </div>
            </div>
          }


        </Modal.Body>
      </Modal>
    </>
  );
}

export default Associado;