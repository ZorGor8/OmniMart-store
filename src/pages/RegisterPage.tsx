import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
   
    if (formData.password !== formData.confirmPassword) {
      alert("Пароли не совпадают! (Passwords do not match!)");
      return;
    }

    console.log("Данные отправлены на сервер (имитация):", formData);
    alert("Регистрация успешна! (Registration successful!)");
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Создать аккаунт</h2>
        <p className="register-subtitle">Присоединяйтесь к сообществу OmniMart</p>

        <div className="input-group">
          <label>Имя пользователя</label>
          <input 
            type="text" 
            name="username"
            placeholder="Введите имя" 
            value={formData.username}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email"
            placeholder="example@mail.com" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="input-group">
          <label>Пароль</label>
          <input 
            type="password" 
            name="password"
            placeholder="Минимум 6 символов" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="input-group">
          <label>Подтвердите пароль</label>
          <input 
            type="password" 
            name="confirmPassword"
            placeholder="Повторите пароль" 
            value={formData.confirmPassword}
            onChange={handleChange}
            required 
          />
        </div>

        <button type="submit" className="register-button">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};


export default RegisterPage;