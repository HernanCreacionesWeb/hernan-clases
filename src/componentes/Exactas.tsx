 

import "./exactas.css"
import reloj from "../imagenes/fisica-reloj.png"
import pizdin from "../imagenes/fisica-pizarra.png"
import labs from "../imagenes/fisica-simulador.png"
import classroom from "../imagenes/fisica-classroom.png"
import meet from "../imagenes/fisica-meet.png"
import practicas from "../imagenes/fisica-examenes.jpg"
import apuntes from "../imagenes/fisica apuntes.png"
import grafica from "../imagenes/fisica-grafica.png"
import grabacion from "../imagenes/fisica- grabacion.png"
import consulta from "../imagenes/fisica-consulta.png"


import { Link } from 'react-router-dom';



export const Exactas = () => {
  return (
    <div>

{/*<div className="pizarra">
<h1 className=' h1-jumbo '>
        <span className="titileo">Física</span>
        <span className="titileo">  Matemática</span>
        </h1> 
        <button type="button" className="btn btn-primary mt-4 mb-3 btn-jumbo">Reserva</button>
        <h3 className='mt-4 mb-5 h3-jumbo'>Clases personalizadas</h3>
    </div>*/}

{/* */}

<div className="jumbo-">
      <div className="jumbo-content-">
      <h1 className=' h1-jumbo '>
        <span className="titileo">Física</span>
        <span className="titileo">  Matemática</span>
        </h1> 
        <button type="button" className="btn btn-primary mt-4 mb-3 btn-jumbo"><Link to="/contacto" className="nav-link  active "  >Contacto</Link></button>
        <h3 className='mt-4 mb-5 h3-jumbo'>Clases personalizadas</h3>
      </div>
    </div>













{/*separado*/}
<div style={{ borderBottom: '2px solid #ccc', margin: '20px 0' }}></div>

{/*seccion 2*/}
<div className="seccion">
    <h2 className="h2seccion">Clases Particulares</h2>
    <h3 className="h3seccion">Nivel Universitario, Pre-universitario, Secundario y Primario</h3>
    <p>Clases totalmente personalizadas y adaptadas  al estudiante. <br /> Elaboramos un programa de estudio y contenido en base a tus necesidades. <br /> Quien lleva el rumbo de las clases sos vos!! </p>
    </div> 
{/*separado*/}
<div style={{ borderBottom: '2px solid #ccc', margin: '20px 0' }}></div>

{/*Recursos */}
<h3>Recursos</h3>
<div className="cont-cards">
{/*linea 1*/}
<div className="row">
  <div className="col"><div className="card cb "style={{ width: '18rem' }}>
  <img src={pizdin} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Pizarra dinámica</h5>
   
    
  </div>
</div></div>
  <div className="col"><div className="card ca" style={{ width: '18rem' }}>
  <img src={labs} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Lab y simulación</h5>
    
 
  </div>
</div></div>
  <div className="col"><div className="card cb" style={{ width: '18rem' }}>
  <img src={classroom} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Plataforma de clase</h5>
 
    
  </div>
</div>
</div>
</div> 


{/*linea 2*/}
<div className="row">
  <div className="col"><div className="card ca"style={{ width: '18rem' }}>
  <img src={meet}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Video llamada</h5>
   
    
  </div>
</div></div>
  <div className="col"><div className="card cb" style={{ width: '18rem' }}>
  <img src={practicas} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Prácticas y examenes</h5>
    
 
  </div>
</div></div>
  <div className="col"><div className="card ca" style={{ width: '18rem' }}>
  <img src={apuntes} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Apuntes personalizados</h5>
 
    
  </div>
</div>
</div>
</div> 


{/*linea 3*/}
<div className="row">
  <div className="col"><div className="card cb"style={{ width: '18rem' }}>
  <img src={grafica} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Graficadora</h5>
   
    
  </div>
</div></div>
  <div className="col"><div className="card ca" style={{ width: '18rem' }}>
  <img src={grabacion} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Grabación de clases</h5>
    
 
  </div>
</div></div>
  <div className="col"><div className="card cb" style={{ width: '18rem' }}>
  <img src={consulta} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Horarios de consulta</h5>
 
    
  </div>
</div>
</div>
</div> 


</div>



{/*Metodologia */}
<div className="metodologia- mt-4">
    <h3>Metodología</h3>


    <div className ="container text-center">
  <div className="row">
    <div className="col-12 col-md-6">
    <img src={reloj} alt="" className='reloj' />
    </div>
    <div className="col-12 col-md-6 contp-met">
      <p>Se establece un cronograma de contenido acorde a tu necesidades. La tarifa no es por hora, sino que es por clase. Si bien la clase se estima para que tenga una duración de una hora, si nos exedemos  no hay cobro extra, ya que lo importante es cumplir con los contenidos previstos para esa clase. </p>
    </div>
     
  </div>
</div>

</div>

{/*no te demores */}
<h2 className='h2-note'>No te demores, hacé tu reserva!!</h2>
<button type="button" className="btn btn-primary mt-4 mb-3 btn-jumbo"><Link to="/contacto" className="nav-link  active "  >Contacto</Link></button>




{/*whatsapp */}
<div className="whatsapp">
<a href="https://wa.me/+5492616655143" className="whatsapp-button" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
    </a>
</div>


    </div>

    
  )
}
