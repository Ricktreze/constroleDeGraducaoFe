
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContainerNavBar from './Components/ContainerNavBar'
import MenuLateral from './Components/MenuLateral/MenuLateral'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import imgApmt from './assets/apmt-img.png';


function App() {

  const [nomeMenu, setNomeMenu] = useState(null);
  
  return(
  <>
    <ContainerNavBar />
    <MenuLateral nomeMenu={nomeMenu} setNomeMenu={setNomeMenu}/>
    <div className='divApmt'>
            <img className='imgApmt' src={imgApmt} alt="Logo APMT" />
    </div>

  </>
  )
}

export default App
