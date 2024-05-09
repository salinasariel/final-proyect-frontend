import Footer from "../components/Footer";

const CreateEnterprise = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">
          Solicitud de Alta Empresas
        </h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="legajo" className="font-semibold">
              CUIT
            </label>
            <input
              id="legajo"
              type="text"
              placeholder="Ingrese el CUIT de la empresa"
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
              placeholder="Ingrese el nombre de la empresa"
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="apellido" className="font-semibold">
              Localizacion
            </label>
            <input
              id="apellido"
              type="text"
              placeholder="¿Donde se encuentra la empresa?"
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sexo" className="font-semibold">
              Empleados
            </label>
            <input
            type="number"
              id="employees"
              
              placeholder="¿Cuantos empleados tiene la empresa?"
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="ciudad" className="font-semibold">
              Sector
            </label>
            <input
              id="ciudad"
              type="text"
              placeholder="¿Cual es el sector de la empresa?"
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="telefono" className="font-semibold">
              Teléfono
            </label>
            <input
              id="telefono"
              type="number"
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
      <Footer />
    </div>
  );
};

export default CreateEnterprise;
