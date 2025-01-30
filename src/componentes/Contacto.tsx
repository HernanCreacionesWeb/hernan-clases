import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contacto.css';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_9iidu1n', 'template_qa4haq7', e.target as HTMLFormElement, 'PHWpnDkO3Jo6taZbr')
      .then((result) => {
        console.log(result.text);
        alert('Mensaje enviado con éxito');
      }, (error) => {
        console.log(error.text);
        alert('Hubo un error al enviar el mensaje');
      });

    setFormData({
      user_name: '',
      user_email: '',
      message: ''
    });
  };

  return (
    <div className="contacto-container mb-t mt-5">
      <h2 className='h2-contacto mt-5'>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user_name">Nombre</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Correo Electrónico</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className='btn-contacto mb-5' type="submit">Enviar</button>
      </form>
      <div className="whatsapp">
        <a href="https://wa.me/+5492616655143" className="whatsapp-button" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
        </a>
      </div>
    </div>
  );
};