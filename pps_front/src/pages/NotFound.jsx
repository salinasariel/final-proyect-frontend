import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h1 className="text-4xl font-bold mb-8">¿Estás perdido?</h1>
      <Link to="/home" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Regresar al inicio</Link>
    </div>
  );
};

export default NotFound;
