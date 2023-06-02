import "./Perfil.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";

function Perfil() {
  let { nome_loja, email, nome } = localStorage;
  nome_loja = JSON.parse(nome_loja);
  nome = JSON.parse(nome);
  email = JSON.parse(email);

  const [form, setForm] = useState({
    nome,
    nome_loja,
    email,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleClick() {
    navigate("/perfil/editar");
  }

  return (
    <div className="container">
      <Navbar />

      <div className="form-wrapper">
        <h1>{nome_loja}</h1>
        <h2>Perfil</h2>
        <form onSubmit={handleSubmit}>
          <div className="label-container">
            <label>Seu nome</label>
          </div>
          <input readOnly type="text" name="nome" value={form.nome} />

          <div className="label-container">
            <label>Nome da loja</label>
          </div>
          <input
            readOnly
            type="text"
            name="nome_loja"
            value={form.nome_loja}
          />

          <div className="label-container">
            <label>E-mail</label>
          </div>
          <input readOnly type="text" name="email" value={form.email} />

          <Button text="Editar Perfil" onClick={handleClick} type="button" />
        </form>
      </div>
    </div>
  );
}

export default Perfil;
