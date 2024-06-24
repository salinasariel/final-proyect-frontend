import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../AuthProvider";
import DarkModeButton from "./DarkModeButton";

const Header = ({ logged, searchon, onSearchChange }) => {
  const [search, setSearch] = useState("");
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearchChange(value);
  };
  return (
    <>
      <div className=" bg-[#EEEEEE] sticky top-0 shadow-md dark:bg-stone-900 dark:text-white ">
        <div className=" flex items-center justify-between md:flex-row md:justify-between justify-center p-1">
          <div className="flex">
            <Link to="/home" className="dark:text-white">
              <div className="flex items-center hover:opacity-80 gap-1 mr-2">
                <span className=" font-bold text-3xl text-neutral-700 dark:text-white">
                  {" "}
                  UTN{" "}
                </span>
              </div>
            </Link>
          </div>
          {searchon && (
            <input
              value={search}
              type="text"
              onChange={handleSearchChange}
              placeholder="Buscar"
              className=" scale-up-vertical-center rounded-xl pl-4 md:w-[400px]"
            ></input>
          )}

          <div>
            <ul className="md:flex pd-  gap-2  items-center md:pl-0 md:gap-5 hidden ">
              <li></li>
              {isLoggedIn && (
                <ul className="md:flex pd-  gap-2  items-center md:pl-0 md:gap-5 hidden ">
                  <li className="w-7 h-7 text-neutral-700   rounded-full flex items-center justify-center dark:bg-neutral-800  dark:text-gray-50 dark:border-0">
                    <Link to="/home">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 hover:size-6"
                      >
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                      </svg>
                    </Link>
                  </li>
                  <li className="w-7 h-7 text-neutral-700   rounded-full flex items-center justify-center dark:bg-neutral-800  dark:text-gray-50 dark:border-0">
                    <Link to="/panel">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 hover:size-6"
                      >
                        <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
                      </svg>
                    </Link>
                  </li>
                  <li className="w-7 h-7 text-neutral-700   rounded-full flex items-center justify-center dark:bg-neutral-800  dark:text-gray-50 dark:border-0">
                    <Link to="/profile">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 hover:size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <DarkModeButton />
                  </li>
                </ul>
              )}

              <li>
                {!isLoggedIn && (
                  <Link to="/login">
                    <button
                      type="button"
                      className=" h-8 p-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full  text-xs   me-2    dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center gap-1"
                    >
                      <b>Ingresar </b>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </Link>
                )}
                {isLoggedIn && (
                  <Link to="/">
                    <button
                      onClick={logout}
                      type="button"
                      className="w-7 h-7 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-small rounded-full text-sm px-1 py-1 text-center me-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </Link>
                )}
              </li>
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:hidden mx-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
