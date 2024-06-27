import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <div className="bg-[#EEEEEE] sticky top-0 shadow-md dark:bg-stone-900 dark:text-white">
      <div className="flex items-center justify-between md:flex-row md:justify-between justify-center p-1">
        <div className="flex">
          <Link to="/home" className="dark:text-white">
            <div className="flex items-center hover:opacity-80 gap-1 mr-2">
              <span className="font-bold text-3xl text-neutral-700 dark:text-white">UTN</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginHeader;