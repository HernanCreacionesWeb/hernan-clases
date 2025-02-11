 
import "./español.css"
 
import imgjumbo from "../imagenes/img-jumbo-español.png" 
import imgjumbo2 from "../imagenes/img-español1.png"
import vocabulario from "../imagenes/vocabulario.png"
import pronunciacion from "../imagenes/pronunciacion.jfif"
import dialogo from "../imagenes/dialogo.png"
import adaptacion from "../imagenes/mate.jfif"


import { Link } from 'react-router-dom';



const Espanol = () => {
  return (
    
    
    <div>

{/* Jumbotron */}
<div className="container   mt-3">
  
  <div className="mt-4 p-5 bg-primary text-white rounded jumbo---">
    <h1 className='h1-jumbo'>Transforma tu comunicación es Español</h1> 
    <div className="container text-center">
  <div className="row">
    <div className="col-12 col-sm-6">
      <img src={imgjumbo } alt="" className='rounded-circle  img-jumbo' />
    </div>
    <div className="col-12 col-sm-6 cont-pjumbo">
     <p className="p-jumbo">Cursos para todas las edades. <br />
     Disfrutá aprendiendo el idioma con clases personalizadas y adaptadas a tu nivel</p>
     <button type="button" className="btn   buton"><Link to="/contacto" className="nav-link  active "  >Contacto</Link></button>
    </div>
   
    
  </div>
</div>
  </div>
</div>


{/*jumbo 2 */}
<div className="container   mt-3">
  
  <div className="mt-4 p-5 bg-primary text-white rounded jumbo2">
    <h3 className='h1-jumbo'>Español para extranjeros</h3> 
    <div className="container text-center">
  <div className="row">
    <div className="col-12 col-sm-6">
      <img src={imgjumbo2 } alt="" className='rounded-circle  img-jumbo img-jumbo2' />
    </div>
    <div className="col-12 col-sm-6 cont-pjumbo2">
      <p className="p-jumbo p-jumbo2">Mejora tu fluidez y comprensión con clases adaptadas a tus metas: </p>
     <ul className="ul-jumbo2">
      <li className='li-jumbo2'><p>Conversación</p></li>
      <li className='li-jumbo2'><p>Estudio</p></li>
      <li className='li-jumbo2'><p>Trabajo</p></li>
      <li className='li-jumbo2'><p>Turismo</p></li>
     </ul>
    </div>
   
    
  </div>
</div>
  </div>
</div>



<div className="promo">
  <h3 className='h1-promo mt-5'>Domina el Idioma con Confianza</h3>
  <p className="p-promo">Las clases de español están diseñadas para ayudarte a alcanzar fluidez  mientras desarrollas habilidades prácticas y naturales en el idioma. <br /> Cada lección combina teoría y práctica, permitiéndote aprender de manera dinámica y efectiva.</p>
</div>





{/*encontraras*/}
<div className="encontrar  ">
  <h3 className='h1-encontrar' >¿Qué encontrarás en nuestras clases?</h3>
  {/*cards */}
  <div className="container text-center ">
  <div className="row cards">
    {/*card 1 */}
    <div className="col">
    <div className="card" style={{width: "18rem"}}>
  <img src={vocabulario} className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5 className="card-title">Vocabulario</h5>
    
  </div>
</div>
    </div>
      {/*card 2 */}
    <div className="col">
    <div className="card" style={{width: "18rem"}}>
  <img src={pronunciacion} className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5 className="card-title">Pronunciación</h5>
    
  </div>
</div>
    </div>
      {/*card 3 */}
    <div className="col">
    <div className="card" style={{width: "18rem"}}>
  <img src={dialogo} className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5 className="card-title">Diálogos</h5>
     
  </div>
</div>
    </div>
      {/*card 4 */}
    <div className="col">
    <div className="card" style={{width: "18rem"}}>
  <img src={adaptacion} className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5 className="card-title">Adaptación</h5>
     
  </div>
</div>
    </div>
  </div>
</div>
</div>



{/*explicación */}
<div className="div explicacion mt-4">
  <ul className="ul-explicacion">
    <li className='p-promo'><p>	<strong> Ampliación de vocabulario</strong>: Aprenderás las palabras y expresiones más utilizadas, adaptadas a situaciones cotidianas y profesionales, para que te comuniques con precisión y seguridad.</p></li>
    <li className='p-promo'><p> <strong> Diálogos prácticos</strong>: Practicarás conversaciones reales que te prepararán para interactuar en diversos contextos, desde presentaciones hasta charlas informales.</p></li>
    <li className='p-promo'><p><strong>Pronunciación clara y precisa</strong>: Perfeccionarás tu acento español a través de ejercicios específicos que te ayudarán a dominar la adaptación de palabras y sonidos característicos del idioma.</p></li>
    <li className='p-promo'><p><strong>Comprensión auditiva</strong>: Escucharás y analizarás audios en diferentes acentos para mejorar tu capacidad de entender a hablantes nativos.</p></li>
    <li className='p-promo'><p><strong>Adaptación cultural</strong>: Además del idioma, aprenderás sobre la cultura hispana, sus tradiciones y cómo las palabras y expresiones reflejan la diversidad de los países de habla hispana.</p></li>
  </ul>
</div>

{/*metodologia */}
<div className="metodologia mb-5">
  <h3 className='h1-metodologia'>Metodología</h3>
   
    <ul className="ul-ps">
  <li className="p-meto"><p> Clases personalizadas: Adaptamos cada sesión a tu nivel y objetivos personales.</p></li>
  <li className="p-meto"><p>  Práctica continua: Tendrás ejercicios de escritura, lectura y conversación para reforzar lo aprendido.</p></li>
  <li className="p-meto"><p> Material interactivo: Utilizamos recursos audiovisuales, juegos y herramientas digitales para que el aprendizaje sea dinámico.</p></li>
  </ul>
 
</div>


{/* no demores*/ }
<div className="nodemores mt-5">
  <h2 className="h2modemores">No demores más, espero tu mensaje</h2>
  <button type="button" className="btn   buton"><Link to="/contacto" className="nav-link  active "  >Contacto</Link></button>
</div>



{/*whatsapp */}
<div className="whatsapp">
<a href="https://wa.me/+5492616655143" className="whatsapp-button" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
    </a>
</div>




    </div>



  );
};

export default Espanol;