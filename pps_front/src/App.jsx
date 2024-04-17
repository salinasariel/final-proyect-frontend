import ChatBot from 'react-simple-chatbot'
import './App.css'
import AppRouter from '/src/router/AppRouter.jsx';
import chatbotSteps from './ChatBot/ChatBotConfig';

function App() {

  return (
      <>
          <AppRouter/>
          
        <ChatBot steps={chatbotSteps} headerTitle="Robotito" />

      </>
  )
}

export default App
