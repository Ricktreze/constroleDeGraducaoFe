import { Button } from "react-bootstrap"
import './BotaoMenu.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function BotaoMenu({handleShow}){
  return(
     <div>
      <Button className="menu" variant="light" onClick={handleShow}>
        <i className="bi bi-list"></i>
      </Button>

    </div>
  )
}
export default BotaoMenu