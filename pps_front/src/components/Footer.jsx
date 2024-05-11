import LogoUtn from "../assets/images/logoutn.png";
import '../assets/animations.css';

const Footer = ({ youarenterprise, moreinfo }) => {
  return (
    <div className="inset-x-0 bottom-0 row-span-1 w-full bg-[#EEEEEE] h-auto mb-0">
      {youarenterprise && (
        <div className="bg-[#f5f5f5] sticky top-0 flex justify-center">
          <b><p className="text-center mt-4">
            ¿Es una empresa interesada en publicar en el portal?{" "}
            <a href="/createnterprise" className="text-blue-500 hover:underline">
              Solicite su alta.
            </a>
          </p></b>
        </div>
      )}

      
      <a href="https://www.utn.edu.ar/es/" target="_blank">
        <img
          src={LogoUtn}
          className="hidden md:w-auto md:h-16 md:block m-3 mb-0"
          alt="Logo UTN"
        />
      </a>
      {moreinfo && (

        <div className="  p-3 flex gap-32">
          <ul>
            <li>
              <h1 className=" font-bold">
                UTN | Universidad Tecnologica Nacional
              </h1>
            </li>
            <div className=" flex gap-1 items-center">
              <a href="https://maps.app.goo.gl/hFzzpCMQcuDEzCop9" target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 text-[#00ADB5]"
                >
                  <path
                    fillRule="evenodd"
                    d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <li>Sarmiento 440</li>
            </div>

            <div className=" flex gap-1 items-center">
              <a href="tel:+541153715600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 text-[#00ADB5]"
                >
                  <path
                    fillRule="evenodd"
                    d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <li>+54 11 5371 5600</li>
            </div>
            <div />
          </ul>
          <div>
            <ul>
              <li>
                <div className=" flex gap-1 items-center">
                  <h1 className=" font-bold">Enlaces UTN</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 text-[#00ADB5]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li>
              <li>
                <a href="https://ria.utn.edu.ar/" target="blank">
                  RIA
                </a>
              </li>
              <li>
                <a
                  href="https://portal.bibliotecas.utn.edu.ar/login"
                  target="blank"
                >
                  Bibliotecas Electronicas
                </a>
              </li>
              <li>
                <a href="https://elibro.net/es/lc/utnfrro/inicio" target="blank">
                  eLibro
                </a>
              </li>
            </ul>
          </div>
        </div>

      )}
      <div className="font-semibold text-center text-xs">
        <p>Copyright © 2024 Universidad Tecnológica Nacional</p>
      </div>
    </div>

  );

};

export default Footer;
