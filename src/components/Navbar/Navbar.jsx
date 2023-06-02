import Produtos from "../../assets/Frame-3.png";
import Perfil from "../../assets/Frame 4.png";
import Sair from "../../assets/Frame.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href="/produtos">
        <img src={Produtos} alt="produtos-page" id="first-img" />
      </a>
      <a href="/perfil">
        <img src={Perfil} alt="perfil-page" />
      </a>
      <a href="/sign-in">
        <img src={Sair} alt="sair-page" />
      </a>
    </div>
  );
}

export default Navbar;
