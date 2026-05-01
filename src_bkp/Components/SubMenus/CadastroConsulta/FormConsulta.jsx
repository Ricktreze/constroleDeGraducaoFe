import { Button, Col, Form, Tab, Tabs } from "react-bootstrap";
import "./FormConsulta.css";

function FormConsulta() {
  return (
    <>
      

       <Form.Label sm="2" className="dataDe">
                Data de:
                <Col sm="25">
                  <Form.Control
                    type="date"
                    size="sm"
                    // value={nomealuno}
                    // disabled={isDisabled}
                    // onBlur={vldField}
                    // onChange={fieldChange}
                    // placeholder="Obrigatório"
                    // className="nomealuno"
                    name="dataDe"
                  />
                </Col>
              </Form.Label>
          
       <Form.Label sm="2" className="dataDe">
                Data até:
                <Col sm="25">
                  <Form.Control
                    type="date"
                    size="sm"
                    // value={nomealuno}
                    // disabled={isDisabled}
                    // onBlur={vldField}
                    // onChange={fieldChange}
                    // placeholder="Obrigatório"
                    // className="nomealuno"
                    name="dataDe"
                  />
                </Col>
              </Form.Label>
      
      <div className="consultarPresenca">
        <Button className="consultarBotao"
              
          // onClick={incluiAssociado}
        >Consultar
          {/* {incluiAltera} */}

        </Button>
        
      </div>
    </>
  );
}

export default FormConsulta;
