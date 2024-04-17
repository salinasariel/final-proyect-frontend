

const chatbotSteps = [
    { id: "1", message: "Hola, ¿cómo te llamas?", trigger: "2" },
    { id: "2", user: true, trigger: "3" },
    {id: "3",message: "Un gusto {previousValue}", end: true,}
];
      
  
  // metodo para convertir respuestas en minusculas
  chatbotSteps.forEach(step => {
    if (step.user) {
      step.trigger = step.trigger.toLowerCase();
    }
  });
  export default chatbotSteps;