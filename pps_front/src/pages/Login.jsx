import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <div className="w-auto mx-auto bg-[#E1E1E1]  rounded-xl">
        <form className=" flex flex-col gap-4 pb-5 py-3 mx-10">
          <h1 className=" text-center font-bold text-2xl">
            Formulario de registro - Bolsa de trabajo UTN
          </h1>
          <div className="flex gap-10">
            <div className="flex gap-1 flex-col">
              <span> Nombre </span>
              <input
                type="text"
                placeholder="Ingrese su nombre"
                className=" rounded-md px-4 font-extralight"
              ></input>
            </div>

            <div className="flex gap-1 flex-col">
              <span className=" font-semibold"> Apellido </span>
              <input
                type="text"
                placeholder="Ingrese su apellido"
                className="rounded-md px-4 font-extralight"
              ></input>
            </div>
          </div>

          <div className=" bg-red-600">
            <div className="flex gap-1 flex-col items-start">
              <span> Tipo y Nro de Documento </span>
              <input
                type="text"
                placeholder="Ingrese su nombre"
                className=" rounded-md px-4 font-extralight"
              ></input>
              <input
                type="text"
                placeholder="Ingrese su nro. de documento"
                className="rounded-md px-4 font-extralight"
              ></input>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
