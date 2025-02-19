import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/upload">Subir Imagen</Link>
    </nav>
  );
};

export default Navbar;
