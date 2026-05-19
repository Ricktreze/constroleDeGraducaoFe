import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import "./FormAluno.css";

function FormAluno({
  associado,
  setAssociado,
  indiceAssociado,
  executaConsultaAssociado,
  setExecutaConsultaAssociado
  // setId,
  // id,
  // setNomealuno,
  // nomealuno,
  // setIdade,
  // idade,
  // setFaixa,
  // faixa,
  // setGrau,
  // grau,
  // setDataInicio,
  // dataInicio,
  // setDataUltimaGraduacao,
  // dataUltimaGraduacao,
  // setDataProximaGraduacao,
  // dataProximaGraduacao,
  // setObservacoes,
  // observacoes,
  // setStatus,
  // status,
  // setSexo,
  // sexo

}) {


    // console.log("associado >>> ", associado[indiceAssociado].nomealuno, "indiceAssociado", indiceAssociado)
  // const [codAssociado, setCodAssociado] = useState(0);
  const [bacupAssociado, setBacupAssociado] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  // const [emissaoCarne, setEmissaoCarne] = useState(null);
  const [selectedPessoa, setSelectedPessoa] = useState(null);
  // const [situacao, setSituacao] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [executaDelete, setExecutaDelete] = useState(0);
  const [id, setId] = useState(associado[indiceAssociado]._id)
  const [nomealuno, setNomealuno] = useState(associado[indiceAssociado].nomealuno)
  const [idade, setIdade] = useState(associado[indiceAssociado].idade)
  const [faixa, setFaixa] = useState(associado[indiceAssociado].faixa)
  const [grau, setGrau] = useState(associado[indiceAssociado].grau)
  const [dataInicio, setDataInicio] = useState(associado[indiceAssociado].datainicio)
  const [dataUltimaGraduacao, setDataUltimaGraduacao] = useState(associado[indiceAssociado].dataUltimaGraduacao)
  const [dataProximaGraduacao, setDataProximaGraduacao] = useState(associado[indiceAssociado].dataProximaGraduacao)
  const [observacoes, setObservacoes] = useState(associado[indiceAssociado].observacoes)
  const [status, setStatus] = useState(associado[indiceAssociado].status)
  const [sexo, setSexo] = useState(associado[indiceAssociado].sexo)
  const [contador, setContador] = useState(1)
  const [incluiSalvar, setIncluiSalvar] = useState(0)
  const [segundoIncluiSalvar, setSegundoIncluiSalvar] = useState("Alterar")
  const [executaPost, setExecutaPost] = useState(0)
  const [objAssociado, setObjAssociado] = useState(null)
  const [objPresenca, setObjPresenca] = useState(null)
  const [registraPresencaPut, setRegistraPresencaPut] = useState(null)
  const [excluirCancelar, setExcluirCancelar] = useState(0)
  const [putPost, setPutPost] = useState(0)

  // setId(associado[indiceAssociado]._id)
  // setNomealuno(associado[indiceAssociado].nomealuno)
  // setIdade(associado[indiceAssociado].idade)
  // setFaixa(associado[indiceAssociado].faixa)
  // setGrau(associado[indiceAssociado].grau)
  // setDataInicio(associado[indiceAssociado].datainicio)
  // setDataUltimaGraduacao(associado[indiceAssociado].dataUltimaGraduacao)
  // setDataProximaGraduacao(associado[indiceAssociado].dataProximaGraduacao)
  // setObservacoes(associado[indiceAssociado].observacoes)
  // setStatus(associado[indiceAssociado].status)
  // setSexo(associado[indiceAssociado].sexo)

  useEffect(() => {

    if (isDisabled) {
      setNomealuno(associado[indiceAssociado].nomealuno)
      setIdade(associado[indiceAssociado].idade)
      setGrau(associado[indiceAssociado].grau)
      setFaixa(associado[indiceAssociado].faixa)
      setSexo(associado[indiceAssociado].sexo)
      setDataInicio(associado[indiceAssociado].dataInicio)
      setDataUltimaGraduacao(associado[indiceAssociado].dataUltimaGraduacao)
      setDataProximaGraduacao(associado[indiceAssociado].dataProximaGraduacao)
      setObservacoes(associado[indiceAssociado].Denominacao)
      setStatus(associado[indiceAssociado].DtInclusao)
      setContador(2)
      setIncluiSalvar("Incluir")
      setSegundoIncluiSalvar("Alterar")
      setExcluirCancelar("Excluir")
    } else if (segundoIncluiSalvar === "Salvar") {
      setId(associado[indiceAssociado]._id)
      setNomealuno(associado[indiceAssociado].nomealuno)
      setIdade(associado[indiceAssociado].idade)
      setGrau(associado[indiceAssociado].grau)
      setFaixa(associado[indiceAssociado].faixa)
      setSexo(associado[indiceAssociado].sexo)
      setDataInicio(associado[indiceAssociado].dataInicio)
      setDataUltimaGraduacao(associado[indiceAssociado].dataUltimaGraduacao)
      setDataProximaGraduacao(associado[indiceAssociado].dataProximaGraduacao)
      setObservacoes(associado[indiceAssociado].Denominacao)
      setStatus(associado[indiceAssociado].DtInclusao)
      setIncluiSalvar("Incluir")
    } else {
      setNomealuno("")
      setIdade("")
      setGrau("")
      setDataInicio("")
      setFaixa("")
      setDataUltimaGraduacao("")
      setDataProximaGraduacao("")
      setObservacoes("")
      setStatus("")
      setSexo("")
      setIncluiSalvar("Salvar")
      setExcluirCancelar("Cancelar")
    }
  }, [indiceAssociado, associado, contador, isDisabled, incluiSalvar, segundoIncluiSalvar]);
  useEffect(() => {
    async function deleteAssociado() {
      try {
        const response = await axios.delete(
          `https://ricktool.com/api/aluno?id=${id}`
        );
        atualizaexecutaConsultaAssociado();
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
    if (executaDelete > 0) {
      deleteAssociado();
    }

  }, [executaDelete]);

  const atualizaSetDeletar = (id) => {
    if (bacupAssociado != id) {
      setBacupAssociado(id);
      setExecutaDelete(executaDelete + 1);
    }
  };
  const atualizaexecutaConsultaAssociado = () => {
    setExecutaConsultaAssociado(executaConsultaAssociado + 1);
  };

  const alteraExecutaPost = () => {

    setExecutaPost(executaPost + 1)
  }

  const incluiAssociado = () => {

    setIsDisabled(!isDisabled);
  
    if (incluiSalvar === "Salvar") {
       
      setObjAssociado({
        "nomealuno": nomealuno,
        "idade": idade,
        "sexo": sexo,
        "faixa": faixa,
        "grau": grau,
        "dataInicio": dataInicio,
        "dataUltimaGraduacao": dataUltimaGraduacao,
        "dataProximaGraduacao": dataProximaGraduacao,
        "observacoes": observacoes,
        "status": status,
      })
       setPutPost("put")
      alteraExecutaPost()
    }else{
 
      setNomealuno("")
      setIdade("")
      setGrau("")
      setDataInicio("")
      setFaixa("")
      setDataUltimaGraduacao("")
      setDataProximaGraduacao("")
      setObservacoes("")
      setStatus("")
      setSexo("")
       console.log("nomealuno",nomealuno, incluiSalvar)
   
    }

  }

  const registraPresenca = () => {
    const data = new Date()
    setObjPresenca({
      "nomeAluno": nomealuno,
      "Idaluno": id,
      "dataPresenca": data
    })
    setRegistraPresencaPut(registraPresencaPut + 1)
  }

  useEffect(() => {
    async function putPresenca(objPresenca) {
      console.log("objPresenca", objPresenca)
      try {
        const response = await axios.put("https://ricktool.com/api/presenca", objPresenca);
        alert("Presença registrada sucesso!")
      } catch (error) {
        alert("Erro de inclusão. Erro: " + error)
        console.error("Error deleting item:", error);
      }

    }
    objPresenca && putPresenca(objPresenca);
  }, [objPresenca, registraPresencaPut])

  const alteraAluno = () => {
    setIsDisabled(!isDisabled);
    setIncluiSalvar("Incluir")
    if (isDisabled === true) {
      setPutPost("post")
      setSegundoIncluiSalvar("Salvar");

    } else {
      
      setObjAssociado({
        "id": id,
        "nomealuno": nomealuno,
        "idade": idade,
        "sexo": sexo,
        "faixa": faixa,
        "grau": grau,
        "dataInicio": dataInicio,
        "dataUltimaGraduacao": dataUltimaGraduacao,
        "dataProximaGraduacao": dataProximaGraduacao,
        "observacoes": observacoes,
        "status": status,
      })
      setPutPost("post")
      setSegundoIncluiSalvar("Alterar")
    }

  }
  useEffect(() => {

    async function postAssociado(objAssociado) {
      try {
        if (putPost === "put") {
          const response = await axios.put("https://ricktool.com/api/aluno", objAssociado);
          alert("Aluno incluído com sucesso!")
        } else {
          const response = await axios.post(`https://ricktool.com/api/aluno?_id=${id}`, objAssociado);
          alert("Aluno alterado com sucesso!")
        }
      } catch (error) {
        alert("Erro de inclusão. Erro: " + error)
        console.error("Error deleting item:", error);
      }
    }
    objAssociado && postAssociado(objAssociado);

  }, [objAssociado, putPost, id]);
  const validaCnpj = (cnpj) => {
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/[^\d]+/g, '');

    // Verifica se a sequência de dígitos é igual a 13 digitos [4]
    if (cnpj.length != 14) {
      return false; // CNPJ inválido
    }

    // Elimina CNPJs invalidos com todos os dízitos iguais [4]
    if (/^(\d)\1{13}$/.test(cnpj)) {
      return false; // CNPJ inválido
    }

    // Calcula os dízitos verificadores [4]
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) {
      return false; // Primeiro dízito verificador inválido
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
      return false; // Segundo dízito verificador inválido
    }

    return true; // CNPJ válido
  }


  const vldField = (e) => {
    var elementoNome = document.getElementsByClassName(e.target.className);

    if (e.target.value === '') { elementoNome[0].focus() }

  }
  const vldFieldCpfCnpj = (e) => {
    var elementoNome = document.getElementsByClassName(e.target.className);
    if (e.target.value === '') { elementoNome[0].focus() }
  }

  const fieldChange = (e) => {
    console.log("Fild Change", e.target.value, selectedValue)
    eval(`set${e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)}(e.target.value)`)
    console.log("selectedValue", selectedValue)
  }

  const constFieldSexo = (e) => {
    setSexo(e.target.value)
  }

  const atualizaOpcao = (e) => {

    // setOpcaoPessoa(e.target.value)
  }

  return (
    <>
      {associado.length > 0 && indiceAssociado <= associado.length && (
        <Form className="formA">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <div className="dadosA1">

              <Form.Label sm="2" className="label-nomeA">
                Nome Aluno:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={nomealuno}
                    disabled={isDisabled}
                    onBlur={vldField}
                    onChange={fieldChange}
                    placeholder="Obrigatório"
                    className="nomealuno"
                    name="nomealuno"
                  />
                </Col>
              </Form.Label>
              <div key="default-radio" className="mb-3 radio-sexoA">
                <Form.Label column sm="2">
                  Sexo
                </Form.Label>
                <Form.Check // prettier-ignore
                  type="radio"
                  id="default-radio"
                  name="sexo"
                  label="Feminino"
                  value="Feminino"
                  checked={sexo === "Feminino"}
                  disabled={isDisabled}
                  onChange={constFieldSexo}
                />
                <Form.Check // prettier-ignore
                  type="radio"
                  id="default-radio"
                  name="sexo"
                  label="Masculino"
                  value="Masculino"
                  checked={sexo === "Masculino"}
                  disabled={isDisabled}
                  onChange={constFieldSexo}
                />
              </div>


            </div>

            {/* <div className="dadosA2">
              

            </div> */}
            <div className="dadosA3">
              <Form.Label>
                Data Início:
                <Form.Control
                  type="date"
                  size="sm"
                  name="dataInicio"
                  disabled={isDisabled}
                  value={dataInicio}
                  onChange={fieldChange}
                />
              </Form.Label>

              <Form.Label>
                Última Graduação:
                <Form.Control
                  type="date"
                  size="sm"
                  name="dataUltimaGraduacao"
                  disabled={isDisabled}
                  value={dataUltimaGraduacao}
                  onChange={fieldChange}
                />
              </Form.Label>

              <Form.Label>
                Próxima Graduação:
                <Form.Control
                  type="date"
                  size="sm"
                  name="dataProximaGraduacao"
                  disabled={isDisabled}
                  value={dataProximaGraduacao}
                  onChange={fieldChange}
                />
              </Form.Label>

            </div>

            <div className="dadosA4">
              <Form.Label sm="2" className="label-faixa">
                Faixa:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    name="faixa"
                    value={faixa}
                    disabled={isDisabled}
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-grau">
                Grau:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={grau}
                    disabled={isDisabled}
                    name="grau"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
             
            </div>

            <div className="dadosA5">
               <Form.Group className="mb-3 label-obs" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Observações:</Form.Label>
        <Form.Control 
        as="textarea" rows={3} 
        disabled={isDisabled}
        />
      </Form.Group>
              
              <div className="subA5">
                {/* <Form.Label sm="2" className="label-cepA">
                  Status:
                  <Col sm="25">
                    <Form.Control
                      type="text"
                      size="sm"
                      value={status}
                      name="status"
                      disabled={isDisabled}
                      onChange={fieldChange}
                    />
                  </Col>
                </Form.Label> */}
                {/* <Button
                  variant="outline-dark"
                  className="btnBuscaA"
                  size="sm"
                  disabled={isDisabled}
                >
                  <i className="bi bi-binoculars"></i>
                </Button> */}
              </div>

            </div>

          </Form.Group>


          <div className="editA">
            <Button 
              className="incluirBtn" 
              variant="outline-primary" 
              disabled={segundoIncluiSalvar === "Salvar" }
              onClick={incluiAssociado}>
              {incluiSalvar}
              <i class="bi bi-person-plus"></i>
            </Button>


            <Button 
              className="editarBtn" 
              variant="outline-warning" 
              disabled={incluiSalvar === "Salvar" }
              onClick={alteraAluno}>
              {segundoIncluiSalvar}
              
              <i className="bi bi-pencil-square"></i>
            </Button>

            
            <Button
              className="excluirBtn"
              variant="outline-danger"
              disabled={incluiSalvar === "Salvar" || segundoIncluiSalvar === "Salvar" }
              onClick={() => {
                if (excluirCancelar === "Excluir") {
                  let resposta = window.confirm(
                    "Deseja realmente seguir com a deleção do Aluno"
                  );
                  if (resposta) {
                    atualizaSetDeletar(id);
                  } else {
                    console.log("Ação cancelada");
                  }
                } else {
                  setIsDisabled(true)
                }
                setIsDisabled(true)
              }}
            >
              {excluirCancelar}
              <i className="bi bi-trash3"></i>
            </Button>
            {/* <Button className="cancelarBtn" variant="outline-danger" disabled>
              Cancelar
              <i class="bi bi-arrow-counterclockwise"></i>
            </Button> */}
            {/* <Button className="mailBtn" variant="outline-warning">
              E-mail
              <i class="bi bi-envelope-at"></i>
            </Button> */}
            <Button 
            className="selecaoBtn" 
            variant="outline-success"
            disabled={incluiSalvar === "Salvar" || segundoIncluiSalvar === "Salvar" }
              onClick={() => {
                if (window.confirm(`Deseja registrar presença para o aluno ${nomealuno} ?`)) {
                  registraPresenca(id)
                }
              }

              }
            >
              Presença
              {/* <i class="bi bi-recycle"></i> */}
            </Button>
          </div>
        </Form>
      )}
    </>
  );
}

export default FormAluno;
