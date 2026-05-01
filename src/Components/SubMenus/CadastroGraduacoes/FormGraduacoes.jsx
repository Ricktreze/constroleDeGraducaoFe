import { Button, Col, Form, Tab, Tabs } from "react-bootstrap";
import "./FormGraduacoes.css";

function FormGraduacoes({ 
  setExecutaConsultaGraduacoes, 
  executaConsultaGraduacoes, 
  graduacoesDe, 
  graduacoesAte,
  setGraduacoesDe, 
  setGraduacoesAte }) {

  const consultaGraduacoes = () => {

    setGraduacoesDe(graduacoesDe)
    setGraduacoesAte(setGraduacoesAte)
    setExecutaConsultaGraduacoes(executaConsultaGraduacoes + 1)
  }


  const fieldChange = (e) => {
    eval(`set${e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)}(e.target.value)`)
  }

  return (
    <>
      <div className="consultaData">
      <Form.Label sm="2" className="dataDe">
        Data de:
        <Col sm="25">
          <Form.Control
            type="date"
            size="sm"
            value={graduacoesDe}
            // disabled={isDisabled}
            // onBlur={vldField}
            onChange={fieldChange}
            // placeholder="Obrigatório"
            // className="nomealuno"
            name="graduacoesDe"
          />
        </Col>
      </Form.Label>

      <Form.Label sm="2" className="dataDe">
        Data até:
        <Col sm="25">
          <Form.Control
            type="date"
            size="sm"
            value={graduacoesAte}
            // disabled={isDisabled}
            // onBlur={vldField}
            onChange={fieldChange}
            // placeholder="Obrigatório"
            // className="nomealuno"
            name="graduacoesAte"
          />
        </Col>
      </Form.Label>
      </div>
      <div className="consultarPresenca">
        <Button className="consultarBotao"

          onClick={consultaGraduacoes}
        >Consultar
          {/* {incluiAltera} */}

        </Button>

      </div>
    </>
  );
}

export default FormGraduacoes;
