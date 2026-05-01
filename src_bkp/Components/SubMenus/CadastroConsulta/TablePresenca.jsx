import { Button, Table } from "react-bootstrap"
import { useEffect, useState } from 'react';
import './TablePresenca.css'
import FormConsulta from "./FormConsulta";
function TablePresenca(){
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [presenca, setPresenca] = useState(null);
  const [executaConsultaPresenca, setExecutaConsultaPresenca] = useState(0);
  const [indicePresenca, setIndicePresenca] = useState(1);

  const atualizaPresenca = (result) => {
    setPresenca(result);   
    setIndicePresenca(0)
    
  }

  useEffect(() => {
    function consultaPresenca() {
     
        fetch(`https://controle-de-graduacao.onrender.com/api/presenca`)
          .then((response) => response.json())
          .then((result) => {
            atualizaPresenca(result);
          })
          .catch((error) => console.error("Erro ao buscar card", error));
      }
      consultaPresenca()

  }, [executaConsultaPresenca]);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    // setShowModal(false);
  }

    const carregarMais = () => {
    setPresencaDe(presencaDe )
    setPresencaAte(presencaAte + 51 )          
    setExecutaConsultaPresenca(executaConsultaPresenca+1)
}
const atualizaFomr = (indice) => {
    setIndicePresenca(indice)
}

  return(
    <>
     <Table bordered hover size="sm" responsive>
            
            <thead>
              <tr>
                <th style={{ width: '20%' }}>Nome Aluno</th>       
                <th style={{ width: '10%' }}>Data Presença</th>   

              </tr>
            </thead>
            {presenca && Array.from({ length: presenca.length }).map((_, idx) => (
        
              <tbody key={idx}>               
                <tr>                            
                  <td onClick={()=>{atualizaFomr(idx)}}>{presenca[idx].nomeAluno}</td>
                  <td onClick={()=>{atualizaFomr(idx)}}>{presenca[idx].dataPresenca} </td>
                </tr>                
              </tbody>
            

            ))}
            
      </Table>
     
      <div className="d-grid gap-3">
        <Button variant="primary" size="lg" onClick={carregarMais} >
          Carregar mais Preseça...
        </Button>
      </div>

    
      </>
  )
}

export default TablePresenca;