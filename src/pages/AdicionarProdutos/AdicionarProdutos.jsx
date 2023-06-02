import { useState } from "react";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./AdicionarProdutos.css";

function AdicionarProdutos() {
  let { nome_loja } = localStorage;
  nome_loja = JSON.parse(nome_loja);

  const [form, setForm] = useState({
    nome: "",
    preco: "",
    estoque: "",
    descricao: "",
    imagem: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (
      form.nome === "" ||
      form.preco === "" ||
      form.estoque === "" ||
      form.descricao === "" ||
      form.imagem === ""
    ) {
      setError("Preencha todos os campos!");
      return;
    }

    localStorage.setItem("nome", JSON.stringify(form.nome));
    localStorage.setItem("preco", JSON.stringify(form.preco));
    localStorage.setItem("estoque", JSON.stringify(form.estoque));
    localStorage.setItem("descricao", JSON.stringify(form.descricao));
    localStorage.setItem("imagem", JSON.stringify(form.imagem));

    axios
      .post("/produtos", form)
      .then((_res) => {
        navigate("/produtos");
      })
      .catch((error) => {
        setError(error);
      });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    if (name) {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }

  function handleClick() {
    navigate("/produtos");
  }

  function handleCancel() {
    const previousNome = JSON.parse(localStorage.getItem("nome"));
    const previousPreco = JSON.parse(localStorage.getItem("preco"));
    const previousEstoque = JSON.parse(localStorage.getItem("estoque"));
    const previousDescricao = JSON.parse(localStorage.getItem("descricao"));
    const previousImagem = JSON.parse(localStorage.getItem("imagem"));

    setForm({
      nome: previousNome || "",
      preco: previousPreco || "",
      estoque: previousEstoque || "",
      descricao: previousDescricao || "",
      imagem: previousImagem || "",
    });

    navigate("/produtos");
  }

  return (
    <div className="container">
      <Navbar />

      <div className="form-wrapper">
        <div className="form-content">
          <h1>{nome_loja}</h1>
          <h2>Adicionar produto</h2>
          <form onSubmit={handleSubmit}>
            <div className="label-container">
              <label>Nome do produto</label>
            </div>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleInputChange}
            />

            <div className="inline-input">
              <div className="input-wrapper">
                <label htmlFor="preco">Preço</label>
                <input
                  type="text"
                  name="preco"
                  id="preco"
                  placeholder="R$"
                />
              </div>

              <div className="input-wrapper">
                <label htmlFor="estoque">Estoque</label>
                <input
                  type="text"
                  name="estoque"
                  id="estoque"
                  placeholder="Un"
                />
              </div>
            </div>

            <div className="label-container">
              <label>Descrição do produto</label>
            </div>
            <input
              type="text"
              name="descricao"
              value={form.descricao}
              onChange={handleInputChange}
            />

            <div className="label-container">
              <label>Imagem</label>
            </div>
            <input
              type="text"
              name="imagem"
              value={form.imagem}
              onChange={handleInputChange}
            />

            <div className="cancel-add-wrapper">
              <button className="cancel" onClick={handleCancel}>
                <Link to="/perfil">Cancelar</Link>
              </button>

              <Button
                text="Adicionar Produto"
                type="button"
                onClick={handleClick}
              />

              {error && <span className="error">{error}</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdicionarProdutos;
