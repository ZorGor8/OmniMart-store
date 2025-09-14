import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <h1 className="contact-title">Контакты</h1>
      <div className="contact-details">
        <p><strong>Адрес:</strong> 1234, Торговый проспект, г. Покупки, 56789</p>
        <p><strong>Электронная почта:</strong> support@omnimart.com</p>
        <p><strong>Телефон:</strong> +1 (555) 123-4567</p>
      </div>
    </div>
  );
};

export default ContactPage;