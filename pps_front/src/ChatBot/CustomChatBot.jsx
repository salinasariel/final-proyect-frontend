

/*const chatbotSteps = [
    { id: "1", message: "Hola, ¿cómo te llamas?", trigger: "2" },
    { id: "2", user: true, trigger: "3" },
    {id: "3",message: "¡Hola {previousValue}! Bienvenido/a a nuestra bolsa de trabajo. ¿En qué puedo ayudarte hoy? ", end: true,}
];
      
  
  // metodo para convertir respuestas en minusculas
  chatbotSteps.forEach(step => {
    if (step.user) {
      step.trigger = step.trigger.toLowerCase();
    }
  });
  export default chatbotSteps;*/
/* eslint-disable no-unused-vars */
  import React, { useState } from 'react';
  /* eslint-enable no-unused-vars */

import ChatBot from 'react-simple-chatbot';
import './ChatBot.css';

const CustomChatbot = () => {
  
  const steps = [{ id: "1", message: "Hola, ¿cómo te llamas?", trigger: "2" },
  { id: "2", user: true, trigger: "3" },
  {id: "3",message: "¡Hola {previousValue}! Bienvenido/a a nuestra bolsa de trabajo. ¿En qué puedo ayudarte hoy? ", end: true,}
  ];
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='chatbot-container'>
      <a className={`chatbot-toggle-button ${isOpen ? 'open' : ''}`} onClick={toggleChatbot}>
        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      </a>
      {isOpen && (
        <ChatBot headerTitle="ChatBot" recognitionEnable={true} recognitionThreshold={0.5} steps={steps} floating={true}/>
      )}

    </div>
  );
};

export default CustomChatbot;