import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import DarkModeButton from "./DarkModeButton";

const BurgerMenu = ({ isMenuOpen, toggleMenu }) => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div className="relative md:hidden">
      <button
        className="text-gray-500 hover:text-gray-600 focus:outline-none dark:text-white "
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        )}
      </button>
      {isMenuOpen && (
        <ul
          style={{ zIndex: 999 }}
          className="absolute right-0 mt-2 w-48 bg-white dark:bg-stone-900 rounded-md shadow-lg py-1 opacity-100"
        >
          {isLoggedIn && (
            <>
              <li className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link to="/home" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                  </svg>
                  <span>Inicio</span>
                </Link>
              </li>
              <li className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link to="/panel" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
                  </svg>
                  <span>Panel</span>
                </Link>
              </li>
              <li className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link to="/profile" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Mi Perfil</span>
                </Link>
              </li>
              <li className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <DarkModeButton />
                <span>Dark Mode</span>
              </li>
              <li className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link
                  to="/"
                  onClick={logout}
                  className="flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 3.75A2.25 2.25 0 0 0 5.25 6v12a2.25 2.25 0 0 0 2.25 2.25h6a.75.75 0 0 1 0 1.5h-6A3.75 3.75 0 0 1 3.75 18V6A3.75 3.75 0 0 1 7.5 2.25h6a.75.75 0 0 1 0 1.5h-6ZM15.47 8.72a.75.75 0 0 0 0 1.06l1.97 1.97H10.5a.75.75 0 0 0 0 1.5h6.94l-1.97 1.97a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06l-3.25-3.25a.75.75 0 0 0-1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Cerrar sesión</span>
                </Link>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link to="/login" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 3.75A2.25 2.25 0 0 0 5.25 6v12a2.25 2.25 0 0 0 2.25 2.25h6a.75.75 0 0 1 0 1.5h-6A3.75 3.75 0 0 1 3.75 18V6A3.75 3.75 0 0 1 7.5 2.25h6a.75.75 0 0 1 0 1.5h-6ZM15.47 8.72a.75.75 0 0 0 0 1.06l1.97 1.97H10.5a.75.75 0 0 0 0 1.5h6.94l-1.97 1.97a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06l-3.25-3.25a.75.75 0 0 0-1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Ingresar</span>
                </Link>
              </li>
              <li className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link to="/CreateStudent" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 3.75A2.25 2.25 0 0 0 5.25 6v12a2.25 2.25 0 0 0 2.25 2.25h6a.75.75 0 0 1 0 1.5h-6A3.75 3.75 0 0 1 3.75 18V6A3.75 3.75 0 0 1 7.5 2.25h6a.75.75 0 0 1 0 1.5h-6ZM15.47 8.72a.75.75 0 0 0 0 1.06l1.97 1.97H10.5a.75.75 0 0 0 0 1.5h6.94l-1.97 1.97a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06l-3.25-3.25a.75.75 0 0 0-1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Registrarse</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;
