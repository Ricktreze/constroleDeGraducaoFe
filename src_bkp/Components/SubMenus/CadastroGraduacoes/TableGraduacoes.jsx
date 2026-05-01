import { Button, Table } from "react-bootstrap"
import { useEffect, useState } from 'react';
import './TableGraduacoes.css'
// import FormConsulta from "./FormConsulta";
function TableGraduacoes({graduacoesDe, graduacoesAte,
                          setExecutaConsultaGraduacoes, 
                          executaConsultaGraduacoes, 
                          setGraduacoesDe,
                          setGraduacoesAte  
                        }){
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [graduacoes, setGraduacoes] = useState(null);
  const [indiceGraduacoes, setIndiceGraduacoes] = useState(1);

  const atualizaGraduacoes = (result) => {
    setGraduacoes(result);   
    setIndiceGraduacoes(0)    
  }

  useEffect(() => {
    function consultaGraduacoes(graduacoesDe, graduacoesAte) {
    
        fetch(`https://controle-de-graduacao.onrender.com/api/graduacoes?dataDe=${graduacoesDe}&dataAte=${graduacoesAte}`)
          .then((response) => response.json())
          .then((result) => {
            atualizaGraduacoes(result);
          })
          .catch((error) => console.error("Erro ao buscar card", error));
      }
      consultaGraduacoes(graduacoesDe, graduacoesAte)

  }, [executaConsultaGraduacoes, graduacoesDe, graduacoesAte]);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    // setShowModal(false);
  }

    const carregarMais = () => {
    setGraduacoesDe(graduacoesDe )
    setGraduacoesAte(graduacoesAte)          
    setExecutaConsultaGraduacoes(executaConsultaGraduacoes+1)
}
const atualizaFomr = (indice) => {
    setIndiceGraduacoes(indice)
}

  return(
    <>
     <Table bordered hover size="sm" responsive>
            
            <thead>
              <tr>
                <th style={{ width: '20%' }}>Nome Aluno</th>       
                <th style={{ width: '10%' }}>Data Próxima Graduação</th> 
                <th style={{ width: '10%' }}>Faixa</th>
                <th style={{ width: '10%' }}>Grau</th>      

              </tr>
            </thead>
            {graduacoes && Array.from({ length: graduacoes.length }).map((_, idx) => (
        
              <tbody key={idx}>               
                <tr>                            
                  <td onClick={()=>{atualizaFomr(idx)}}>{graduacoes[idx].nomealuno}</td>
                  <td onClick={()=>{atualizaFomr(idx)}}>{graduacoes[idx].dataProximaGraduacao} </td>
                  <td onClick={()=>{atualizaFomr(idx)}}>{graduacoes[idx].faixa} </td>
                  <td onClick={()=>{atualizaFomr(idx)}}>{graduacoes[idx].grau} </td>
                </tr>                
              </tbody>
            

            ))}
            
      </Table>
         
      </>
  )
}

export default TableGraduacoes;