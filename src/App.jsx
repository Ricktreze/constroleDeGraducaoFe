
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContainerNavBar from './Components/ContainerNavBar'
import MenuLateral from './Components/MenuLateral/MenuLateral'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import imgGB from './assets/graciecmLogo.jpg';
import Login from './Components/Login/Login';


function App() {

  const [nomeMenu, setNomeMenu] = useState(null);
  const [autorizado, setAltorizado] = useState(false);
  
  return(
  <>
  {!autorizado &&
    <Login 
      autorizado={autorizado}
      setAltorizado={setAltorizado} 
    />
  }
    <ContainerNavBar />
    {autorizado &&
    <MenuLateral 
      nomeMenu={nomeMenu} 
      setNomeMenu={setNomeMenu}
      autorizado={autorizado}
      setAltorizado={setAltorizado} 
      />
}
    {autorizado &&
    <div className='divLogoGB'>
            <img className='imgGB' src={imgGB} alt="Logo GBCM" />
    </div>
}
  </>
  )
}

export default App
