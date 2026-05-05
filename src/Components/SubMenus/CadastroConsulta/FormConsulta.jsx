import { Button, Col, Form, Tab, Tabs } from "react-bootstrap";
import "./FormConsulta.css";

function FormConsulta({executaConsultaPresenca, 
                      setExecutaConsultaPresenca,
                      presencaDe,
                      setPresencaDe,
                      presencaAte,                      
                      setPresencaAte}
                      ) {

  const consultaPresenca = () => {

    setPresencaDe(presencaDe)
    setPresencaAte(presencaAte)
    setExecutaConsultaPresenca(executaConsultaPresenca+1)
  }
  
  const fieldChange = (e) => {
      eval(`set${e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)}(e.target.value)`)
      setExecutaConsultaPresenca(executaConsultaPresenca+1)
  }
  return (
    <>
      

       <Form.Label sm="2" className="dataDe">
                Data de:
                <Col sm="25">
                  <Form.Control
                    type="date"
                    size="sm"
                    value={presencaDe}
                    // disabled={isDisabled}
                    // onBlur={vldField}
                    onChange={fieldChange}
                    // placeholder="Obrigatório"
                    // className="nomealuno"
                    name="presencaDe"
                  />
                </Col>
              </Form.Label>
          
       <Form.Label sm="2" className="dataDe">
                Data até:
                <Col sm="25">
                  <Form.Control
                    type="date"
                    size="sm"
                    value={presencaAte}
                    // disabled={isDisabled}
                    // onBlur={vldField}
                    onChange={fieldChange}
                    // placeholder="Obrigatório"
                    // className="nomealuno"
                    name="presencaAte"
                  />
                </Col>
              </Form.Label>
      
      <div className="consultarPresenca">
        <Button className="consultarBotao"
              
         onClick={consultaPresenca}
        >Consultar
          {/* {incluiAltera} */}

        </Button>
        
      </div>
    </>
  );
}

export default FormConsulta;
