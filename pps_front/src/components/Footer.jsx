import LogoUtn from "../assets/images/logoutn.png";
import "../assets/animations.css";
import { AuthContext } from "../AuthProvider";
import { useState, useContext, useEffect } from "react";
const Footer = ({ youarenterprise, moreinfo }) => {
  
  const { isLoggedIn, logout } = useContext(AuthContext);
  return (
    <div className="fixed bottom-0 w-full bg-[#EEEEEE] dark:bg-stone-900 dark:text-white">
       {!isLoggedIn && (
        <div className="bg-[#f5f5f5] sticky top-0 flex justify-center dark:bg-stone-900">
          <b>
            <p className="text-center mt-4 text-xs">
              ¿Es una empresa interesada en publicar en el portal?{" "}
              <a
                href="/createnterprise"
                className="text-[#00ADB5] hover:underline"
              >
                Solicite su alta.
              </a>
            </p>
          </b>
        </div>
      )}

      <div className="font-semibold text-center text-xs">
        <p>Copyright © 2024 Universidad Tecnológica Nacional</p>
      </div>
    </div>
  );
};

export default Footer;
