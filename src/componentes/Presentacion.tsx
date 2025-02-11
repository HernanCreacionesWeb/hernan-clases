
import React, { useState, useEffect } from 'react';

import "./presentacion.css"
import infoespañol from "../imagenes/info-español.jfif"
import infoextactas from "../imagenes/info-exactas.jfif"
import infosociales from "../imagenes/info-sociales.jfif"
import agenda from "../imagenes/agenda.png"
import { Link } from 'react-router-dom';

export const Presentacion = () => {
  
    const [comments, setComments] = useState<{ name: string; country: string; message: string }[]>([]);
    const [name, setName] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [message, setMessage] = useState<string>('');
  
    useEffect(() => {
      const savedComments = localStorage.getItem('comments');
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);
  
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    };
  
    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCountry(e.target.value);
    };
  
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value);
    };
  
    const handleCommentSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (name.trim() && country.trim() && message.trim()) {
        setComments([...comments, { name, country, message }]);
        setName('');
        setCountry('');
        setMessage('');
      }
    };
   





  return (
    <div>
        <div className="linea"></ div>
        <div className="jumbo------">
            <h1 className="title mb-3">Clases personalizadas</h1>
            <h2 className="subtitle mb-3">Óptimos resultados</h2>
            <button type="button" className="btn   buton"><Link to="/contacto" className="nav-link  active "  >Reserva</Link></button>
        </div>
        <div className="frase m-5 bt-5">
            <blockquote>
    <p className='p-frase mb-5'> 
      " Si quieres dominar algo, enseñalo. Cuanto más lo enseñas, mejor aprendes. La enseñanza es una herramienta poderosa para el aprendizaje" </p>
    <cite >— 𝑹𝒊𝒄𝒉𝒂𝒓𝒅 𝑭𝒆𝒚𝒏𝒎𝒂𝒏</cite>
</blockquote>
</div>




<div className="container servicios-cont mb-4 mt-5">
    <h3 className='h3-serv-- mt-5 '>Servicios</h3>

    <div  className="container text-center cols">
  <div className="row-cards-alfa  ">
    
    <div className="col mx-3">
    <div className="card-alfa" style={{ width: "18rem" }}>
  <img src={infoespañol} className="card-img-top-alfa" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Español</h5>
    <p className="card-text-i">Clases y conversación. Énfasis en la práctica.</p>
    <Link  to="/español" className="btn btn-primary"  >+ Información</Link>
  </div>
</div>
    </div>


    <div className="col mx-3">
    <div className="card-alfa" style={{ width: "18rem" }}>
  <img src={infoextactas} className="card-img-top-alfa" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Cs. Exactas</h5>
    <p className="card-text-i">Preparación teórica y práctica para tus exámenes.</p>
    <Link  to="/exactas" className="btn btn-primary"  >+ Información</Link>
  </div>
</div>
    </div>
    <div className="col mx-3">
    <div className="card-alfa" style={{ width: "18rem" }}>
  <img src={infosociales} className="card-img-top-alfa" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Cs. Sociales</h5>
    <p className="card-text-i">Comprensión y análisis de textos. Técnicas de estudio.</p>
    <Link  to="/sociales" className="btn btn-primary"  >+ Información</Link>
  </div>
</div>
    </div>
  </div>
</div>
</div>



<div className="metodologia  ">
<h3 className='h3-serv'>Metodología</h3>
  <p className='p-metod'>En este programa de clases particulares online, se ofrece clases personalizadas que se adaptan a las necesidades únicas de cada estudiante. Sabiendo que cada alumno tiene su propio ritmo y estilo de aprendizaje, se elabora un programa de contenidos específico que se ajusta a tus requerimientos y objetivos. Esto garantiza que cada sesión sea relevante y efectiva, maximizando así el potencial de aprendizaje.</p>
  <p className='p-metod'>El servicio ofrece la elaboración de material teórico-práctico acorde a tu nivel y necesidades. Esto significa que no solo se proporciona información, sino que también vas a contar con ejercicios y actividades que facilitan la comprensión y aplicación de los conceptos aprendidos. Este enfoque práctico permite a los estudiantes consolidar su conocimiento de manera efectiva.</p>
  <p className='p-metod'>Además, sabiendo que la flexibilidad es clave en la educación online, se ofrece horarios de consulta adaptables, permitiendo que el aprendizaje se integre sin problemas en tu rutina diaria. Ya sea que prefieras clases por la mañana, tarde o noche.</p>
  <p className='atte'>Atentamente espero tu mensaje!! </p>
</div>




{/*Agendá */}

<div className="agendá">
  <div className="row row-reserva">
  <div className="col  "><img className='img-agenda' src={agenda} alt="" /></div>
    <div className="col "><h2 className='p-reserva'>Reservá tu clase ahora!</h2></div>
   
  </div>
  <button type="button" className="btn   buton"><Link to="/contacto" className="nav-link  active "  >Reserva</Link></button>
</div>











      {/* opiniones entradas */}
      <div className='entradas-section'>
      <h2 className='h2-opiniones'>Opiniones de alumnos</h2>
      <form className='mb-5' onSubmit={handleCommentSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Nombre"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Elige tu país</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            value={country}
            onChange={handleCountryChange}
          >
            <option value="">Elige tu país</option>
            <option>Argentina</option>
            <option>Bolivia</option>
            <option>Brasil</option>
            <option>Chile</option>
            <option>Colombia</option>
            <option>Perú</option>
            <option>Uruguay</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Deja tu mensaje</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-info mt-3">Enviar</button>
      </form>


<div id="commentsSection">
        {comments.map((comment, index) => (
          <div key={index}>
            <strong>{comment.name} ({comment.country})</strong>
            <p>{comment.message}</p>
          </div>
        ))}
      </div>
      

      </div>















<div className="whatsapp">
<a href="https://wa.me/+5492616655143" className="whatsapp-button" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
    </a>
</div>






    </div>


 





    )
}
 