 
import './navbar.css'
import logo from "../imagenes/logoclases-SINfondo.png"
import mercado from "../imagenes/mercado-pago-logo-0.png"
import transfer from "../imagenes/banco-nacion.png"
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>

            <div className="preheader">


                <div className="container text-center">
                 <ul className='ul-prehead'>
                  <li  className='li-prehead1 ' >Medios de pago</li>
                  <li className='li-prehead '><img src={mercado} className='mp' alt="" /></li>
                  <li  className='li-prehead '><img src={transfer} alt="" className='banco'/></li>
                 </ul>
                </div>
                
            </div>


<div className="menu">
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link to="/inicio" className="navbar-brand"  ><img src={logo} className='logo me-x' alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link  to="/inicio" className="nav-link active item1" aria-current="page" >Inicio</Link>
        </li>
        <li className="nav-item">
          <Link  to="/español" className="nav-link active "  >Español</Link>
        </li>
        
        <li className="nav-item">
          <Link to="/exactas" className="nav-link  active "   >Cs. Exactas</Link>
        </li>

        <li className="nav-item">
          <Link to="/sociales" className="nav-link  active "   >Cs. Sociales</Link>
        </li>

        <li className="nav-item">
          <Link to="/contacto" className="nav-link  active "  >Contacto</Link>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
</div>




        </div>
    )
}
