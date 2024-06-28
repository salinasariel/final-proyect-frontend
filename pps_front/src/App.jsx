import "./App.css";
import AppRouter from "/src/router/AppRouter.jsx";
import CustomChatbot from "./components/ChatBot/CustomChatBot";
import { AuthContext, AuthProvider } from "./AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <>
      <ToastContainer />
        <AppRouter />
        <CustomChatbot />

      </>
    </AuthProvider>
  );
}

export default App;
