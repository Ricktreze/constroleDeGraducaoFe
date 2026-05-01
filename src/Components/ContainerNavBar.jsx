
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import './ContainerNavBar.css';
import logo from '../assets/logo-menu-branco.png';
import logoCM from '../assets/logoCM.png';



function ContainerNavBar() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-primary">
      <Container fluid>
        <Navbar.Brand href="#" className='logo'>
          <img src={logo} alt="Logo GB"  />
          <img src={logoCM} alt="Logo CM" />
        </Navbar.Brand>
       
      </Container>
    </Navbar>
  );
}

export default ContainerNavBar;