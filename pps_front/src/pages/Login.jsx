import Footer from "../components/Footer";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md scale-up-center">
        <h1 className="text-3xl font-bold text-center mb-4">
        Inicio de Sesión Estudiantes
        </h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="nombre" className="font-semibold">
              Legajo
            </label>
            <input
              id="id"
              type="text"
              placeholder="Su legajo de cinco digitos."
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="apellido" className="font-semibold">
              Clave
            </label>
            <input
              id="pass"
              type="password"
              placeholder="Su clave alfanumerica."
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>


          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="text-center mt-4">
          ¿No tiene cuenta de estudiante?{" "}
          <a href="/createstudent" className="text-blue-500 hover:underline">
            Solicítela
          </a>
          .
        </p>
      </div>
      <Footer  />
    </div>
  );
};

export default Login;