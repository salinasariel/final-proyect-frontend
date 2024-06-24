import { useState } from "react";
import ChatBot from "react-simple-chatbot";
import "./ChatBot.css";

const CustomChatbot = () => {
  const steps = [
    { id: "1", message: "Hola, ¿cómo te llamas?", trigger: "2" },
    { id: "2", user: true, trigger: "3" },
    {
      id: "3",
      message:
        "¡Hola {previousValue}! Bienvenido/a a nuestra bolsa de trabajo. ¿En qué puedo ayudarte hoy?",
      trigger: "menu",
    },
    {
      id: "menu",
      options: [
        {
          value: 1,
          label: "Necesito contactarme con la Universidad",
          trigger: "contacto",
        },
        {
          value: 2,
          label: "¿Cómo puedo publicar una oferta?",
          trigger: "publicar",
        },
        {
          value: 3,
          label: "¿Cómo puedo postularme a una oferta?",
          trigger: "postular",
        },
      ],
    },
    {
      id: "contacto",
      message:
        "Si necesitas comunicarte con la Universidad, puedes encontrar información de contacto en nuestro sitio web oficial 'https://utn.edu.ar/es/' ",
      trigger: "menu",
    },
    {
      id: "publicar",
      message:
        "Si eres una empresa y deseas publicar una oferta laboral en nuestra bolsa de trabajo, sigue estos pasos:\n\n1. Accede a la plataforma de la bolsa de trabajo.\n2. Inicia sesión con tu cuenta de empresa.\n3. Busca la opción para crear una nueva oferta.\n4. Completa los detalles de la oferta, como el título, descripción, requisitos y ubicación.\n5. Publica la oferta para que los estudiantes puedan verla y postularse.",
      trigger: "menu",
    },
    {
      id: "postular",
      message:
        "Si eres un estudiante y deseas postularte a una oferta laboral, sigue estos pasos:\n\n1. Accede a la plataforma de la bolsa de trabajo.\n2. Inicia sesión con tu cuenta de estudiante.\n3. Explora las ofertas disponibles.\n4. Selecciona una oferta que te interese.\n5. Lee los detalles y requisitos cuidadosamente.\n6. Postúlate siguiendo las instrucciones proporcionadas por la empresa.",
      trigger: "menu",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <a
        className={`chatbot-toggle-button ${isOpen ? "open" : ""}`}
        onClick={toggleChatbot}
      >
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      </a>
      {isOpen && (
        <ChatBot
          headerTitle="ChatBot"
          recognitionEnable={true}
          recognitionThreshold={0.5}
          steps={steps}
          floating={true}
        />
      )}
    </div>
  );
};

export default CustomChatbot;
