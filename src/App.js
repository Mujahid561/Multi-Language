// src/App.js
import React from 'react';
import { useTranslation } from 'react-i18next';


function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <p>{t('title')}</p>
      {/* <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('es')}>Español</button> */}
      <select onChange={(e)=>handleChangeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
}

export default App;
