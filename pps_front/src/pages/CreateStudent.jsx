import Footer from "../components/Footer";

const CreateStudent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">
          Solicitud de Alta Estudiantes
        </h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="legajo" className="font-semibold">
              Legajo
            </label>
            <input
              id="legajo"
              type="text"
              placeholder="Ingrese su legajo de cinco dígitos"
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nombre" className="font-semibold">
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              placeholder="Ingrese su nombre"
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="apellido" className="font-semibold">
              Apellido
            </label>
            <input
              id="apellido"
              type="text"
              placeholder="Ingrese su apellido"
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sexo" className="font-semibold">
              Sexo
            </label>
            <input
              id="sexo"
              type="text"
              placeholder="Ingrese su sexo"
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="ciudad" className="font-semibold">
              Ciudad
            </label>
            <input
              id="ciudad"
              type="text"
              placeholder="Ingrese la ciudad donde vive"
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="telefono" className="font-semibold">
              Teléfono
            </label>
            <input
              id="telefono"
              type="text"
              placeholder="Ingrese su número de teléfono"
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="clave" className="font-semibold">
              Clave
            </label>
            <input
              id="clave"
              type="password"
              placeholder="Ingrese su clave alfanumérica"
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-300"
          >
            Enviar Solicitud
          </button>
        </form>
        
      </div>
      <Footer youarenterprise={false} />
    </div>
  );
};

export default CreateStudent;
