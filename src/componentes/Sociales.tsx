import "./sociales.css"

import pizdin from "../imagenes/fisica-pizarra.png"
 
import classroom from "../imagenes/fisica-classroom.png"
import meet from "../imagenes/fisica-meet.png"
import practicas from "../imagenes/fisica-examenes.jpg"
import apuntes from "../imagenes/fisica apuntes.png"
 
import grabacion from "../imagenes/fisica- grabacion.png"
import consulta from "../imagenes/fisica-consulta.png"

import { Link } from 'react-router-dom';


export const Sociales = () => {
  return (
    <div>
      <div className="jumbo mb-3">
        <div className="jumbo-content">
          <h1 className='h1-jumbosociales'>Prepará tus materias</h1>
          <div className="container text-center">
            <div className="row mt-4">
              <div className="col-6 colu-a">Historia</div>
              <div className="col-6 colu-c">Filosofía</div>
              <div className="col-6 colu-b">Formación ética y ciudadana</div>
              <div className="col-6 colu-d">Introducción al derecho</div>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="btn btn-primary btn-sociales">
        <Link to="/contacto" className="nav-link active">Contacto</Link>
      </button>

      {/* Recursos */}
      <h3 className='mt-5'>Recursos</h3>
      <div className="cont-cards">
        {/* linea 1 */}
        <div className="row">
          <div className="col">
            <div className="card cb" style={{ width: '18rem' }}>
              <img src={pizdin} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pizarra dinámica</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card ca" style={{ width: '18rem' }}>
              <img src={grabacion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Grabación de clases</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cb" style={{ width: '18rem' }}>
              <img src={classroom} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plataforma de clase</h5>
              </div>
            </div>
          </div>
       

        {/* linea 2 */}
        
          <div className="col">
            <div className="card ca" style={{ width: '18rem' }}>
              <img src={meet} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Video llamada</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cb" style={{ width: '18rem' }}>
              <img src={practicas} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Prácticas y examenes</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card ca" style={{ width: '18rem' }}>
              <img src={apuntes} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Apuntes personalizados</h5>
              </div>
            </div>
          </div>
       

        {/* linea 3 */}
        
          <div className="col">
            <div className="card cb" style={{ width: '18rem' }}>
              <img src={consulta} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Horarios de consulta</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* metodologia */}
      <div className="metodologia- mt-4">
        <h3>Metodología</h3>
        <div className="container text-center">
          <div className="row">
            <p>Se establece un cronograma de contenido acorde a tu necesidades. La tarifa no es por hora, sino que es por clase. Si bien la clase se estima para que tenga una duración de una hora, si nos exedemos no hay cobro extra, ya que lo importante es cumplir con los contenidos previstos para esa clase.</p>
            <p>En clase nos centraremos en el desarrollo de habilidades de lectura y comprensión de textos, elementos fundamentales para el aprendizaje significativo en esta disciplina. En este enfoque, se reconoce que la lectura no es solo una actividad mecánica, sino un proceso activo de construcción de significados, donde los estudiantes interactúan con el texto, analizan información y desarrollan un pensamiento crítico. Además nos trataremos la búsqueda del método adecuado para cada estudiante.</p>
          </div>
        </div>
      </div>

      {/* no te demores */}
      <h2 className='h2-note'>No te demores, hacé tu reserva!!</h2>
      <button type="button" className="btn btn-primary mt-4 mb-3 btn-jumbo">
        <Link to="/contacto" className="nav-link active">Contacto</Link>
      </button>

      {/* whatsapp */}
      <div className="whatsapp">
        <a href="https://wa.me/+5492616655143" className="whatsapp-button" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
        </a>
      </div>
    </div>
  )
}
