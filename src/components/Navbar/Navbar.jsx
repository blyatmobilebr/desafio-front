import { Link } from 'react-router-dom';
import Produtos from '../../assets/Frame-3.png';
import Perfil from '../../assets/Frame 4.png';
import Sair from '../../assets/Frame.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/produtos">
        <img src={Produtos} alt="produtos-page" id="first-img" />
      </Link>
      <Link to="/perfil">
        <img src={Perfil} alt="perfil-page" />
      </Link>
      <Link to="/sign-in">
        <img src={Sair} alt="sair-page" />
      </Link>
    </div>
  );
}

export default Navbar;
