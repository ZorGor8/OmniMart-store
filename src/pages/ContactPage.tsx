
import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Контакты</h1>
        <p>Если у вас есть вопросы, предложения или пожелания, пожалуйста, свяжитесь с нами.</p>
        <p>Email: <a href="mailto:info@omnimart.com">info@omnimart.com</a></p>
        <p>Телефон: +123 456 7890</p>
        <p>Адрес: г. Базадановск, ул. Программистов, 1</p>
      </div>
    </div>
  );
};

export default ContactPage;