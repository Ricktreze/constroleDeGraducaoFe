import { Button, Table } from "react-bootstrap"
import { useEffect, useState } from 'react';
import './TableAssociado.css'
function TableAssociado({associado, setAssociado,indiceAssociado,setIndiceAssociado}){
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  // const [associado, setAssociado] = useState(null);
  const [associadoDe, setAssociadoDe] = useState(0);
  const [associadoAte, setAssociadoAte] = useState(50);
  const [executaConsultaAssociado, setExecutaConsultaAssociado] = useState(0);

  const atualizaAssociado = (result) => {
    setAssociado(result);   
    setIndiceAssociado(0)
    
  }

  useEffect(() => {
    function consultaAssociado() {
     
        fetch(`https://controle-de-graduacao.onrender.com/api/aluno`)
          .then((response) => response.json())
          .then((result) => {
            atualizaAssociado(result);
          })
          .catch((error) => console.error("Erro ao buscar card", error));
      }
      consultaAssociado()

  }, [executaConsultaAssociado]);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
  }

    const carregarMais = () => {
    setAssociadoDe(associadoDe )
    setAssociadoAte(associadoAte + 51 )          
    setExecutaConsultaAssociado(executaConsultaAssociado+1)
}
const atualizaFomr = (indice) => {
    setIndiceAssociado(indice)
}

  return(
    <>
     <Table bordered hover size="sm" responsive>
            
            <thead>
              <tr>
                <th style={{ width: '20%' }}>Nome</th>       
                {/* <th style={{ width: '10%' }}>Sexo</th>    */}
                <th style={{ width: '10%' }}>Faixa</th>   
                <th style={{ width: '10%' }}>Grau</th>
                {/* <th style={{ width: '15%' }}>Data Inicio</th> */}
                {/* <th style={{ width: '15%' }}>Data Ultima Graduação</th> */}
                {/* <th style={{ width: '15%' }}>Data Proxima Graduação</th> */}
                {/* <th style={{ width: '10%' }}>observacoes</th>               */}
              </tr>
            </thead>
            {associado && Array.from({ length: associado.length }).map((_, idx) => (
        
              <tbody key={idx}>               
                <tr>                            
                  <td onClick={()=>{atualizaFomr(idx)}}>{associado[idx].nomealuno}</td>
                  {/* <td onClick={()=>{atualizaFomr(idx)}}>{associado[idx].sexo} </td> */}
                  <td onClick={()=>{atualizaFomr(idx)}}>{associado[idx].faixa} </td>
                  <td onClick={()=>{atualizaFomr(idx)}}>{associado[idx].grau} </td>
                  {/* <td onClick={()=>{atualizaFomr(idx)}}>{associado[idx].dataInicio} </td> */}
                  {/* <td onClick={()=>{atualizaFomr(idx)}}>{associado[idx].dataUltimaGraduacao} </td> */}
                  {/* <td onClick={()=>{atualizaFomr(idx)}}>{associado[idx].dataProximaGraduacao} </td> */}
                  {/* <td onClick={()=>{atualizaFomr(idx)}}>{associado[idx].observacoes} </td> */}
                </tr>                
              </tbody>
            

            ))}
            
          </Table>
      
          <div className="d-grid gap-3">
            <Button variant="primary" size="lg" onClick={carregarMais} >
              Carregar mais Alunos...
            </Button>
          </div>

          
      </>
  )
}

export default TableAssociado;