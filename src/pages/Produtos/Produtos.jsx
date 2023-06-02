import Plant from "../../assets/Rectangle-4.png";
import "./Produtos.css"
import Produto from "../../assets/Frame-3.png"
import Perfil from "../../assets/Frame 4.png"
import Sair from "../../assets/Frame.png"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";


function Produtos() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/produtos/novo");
  }

  const {nome_loja} = localStorage;

  return (
    <div className="container">
      <Navbar />

      <div className="product-wrapper">
        <h1>{JSON.parse(nome_loja)}</h1>

        <h2>Seus produtos</h2>

        <div className="card-group">
          <div className="card">
            <div className="image">
              <img src={Plant} alt="plant" />
            </div>
            <div className="body"> 
              <h1>Nome do Produto</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>

              <div className="footer">
                <div className="amount">
                  <p>3 unidades</p>
                </div>
                <div className="price">
                  <p>R$ 99.99</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
          <div className="image">
            <img src={Plant} alt="plant" />
          </div>
          <div className="body"> 
            <h1>Nome do Produto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>

            <div className="footer">
              <div className="amount">
                <p>3 unidades</p>
              </div>
              <div className="price">
                <p>R$ 99.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src={Plant} alt="plant" />
          </div>
          <div className="body"> 
            <h1>Nome do Produto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>

            <div className="footer">
              <div className="amount">
                <p>3 unidades</p>
              </div>
              <div className="price">
                <p>R$ 99.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src={Plant} alt="plant" />
          </div>
          <div className="body"> 
            <h1>Nome do Produto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>

            <div className="footer">
              <div className="amount">
                <p>3 unidades</p>
              </div>
              <div className="price">
                <p>R$ 99.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src={Plant} alt="plant" />
          </div>
          <div className="body"> 
            <h1>Nome do Produto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>

            <div className="footer">
              <div className="amount">
                <p>3 unidades</p>
              </div>
              <div className="price">
                <p>R$ 99.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button text="Adicionar Produto" type="button" onClick={handleClick} />
    </div>
  </div>
  )
}

export default Produtos