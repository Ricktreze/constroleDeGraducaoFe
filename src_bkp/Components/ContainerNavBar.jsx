
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import './ContainerNavBar.css';
import logo from '../assets/logo-menu-branco.png';



function ContainerNavBar() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-primary">
      <Container fluid>
        <Navbar.Brand href="#" className='logo'>
          <img src={logo} alt="Logo APMT"  />
        </Navbar.Brand>
       
      </Container>
    </Navbar>
  );
}

export default ContainerNavBar;