 
import "./footer.css"
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div>

 
<div className="container">
  <footer className="py-3 my-4 mb-0">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/inicio" className="nav-link px-2 text-body-secondary">Inicio</Link></li>
      <li className="nav-item"><Link to="/español" className="nav-link px-2 text-body-secondary">Español</Link></li>
      <li className="nav-item"><Link to="/exactas" className="nav-link px-2 text-body-secondary">Cs. Exactas</Link></li>
      <li className="nav-item"><Link to="/sociales" className="nav-link px-2 text-body-secondary">Cs. Sociales</Link></li>
 
    </ul>
    <a href="https://hernancreacionesweb.github.io/hc-portfolio-web/"  ><p className="text-center text-body-secondary chivo">&copy; Desarrollado por HC Creaciones Web</p></a>
    
  </footer>
</div>
        
    </div>
    
  )
}
