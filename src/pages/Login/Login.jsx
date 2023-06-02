import { useState } from "react";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    nome_loja: "",
    email: "",
    senha: "",
    senhaConfirmacao: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  function handleInputChange(e) {
    const { name, value } = e.target;

    if (name) {
      setForm({
        ...form,
        [name]: value
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    if (!form.email || !form.senha) {
      setError("Todos os campos são obrigatórios!");
      setSuccess("");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("E-mail está em um formato inválido!");
      setSuccess("");
    } else if (form.email.toLowerCase() !== JSON.parse(localStorage.getItem("email").toLowerCase())) {
      setError("E-mail incorreto!");
      setSuccess("");
    } else if (form.senha !== JSON.parse(localStorage.getItem("senha"))) {
      setError("Senha incorreta!");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Login realizado com sucesso!");
      navigate("/produtos");
    }
  }  
        

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <h4 className="form-title">Login</h4>

        <label className="label">E-mail</label>
        <input
          className="input"
          type="text"
          onChange={(event) => handleInputChange(event)}
          value={form.email}
          name="email"
        />

        <label className="label">Senha</label>
        <input
          className="input"
          type="password"
          onChange={(event) => handleInputChange(event)}
          value={form.senha}
          name="senha"
        />

        {error && <span className="error">{error}</span>}
        {success && <span className="error">{success}</span>}


        <button 
          className="form-button send-button" 
          type="submit">
            ENTRAR
        </button>

        <p className="paragraph">
          Primeira vez aqui? <Link to="/usuarios" className="link">CRIE UMA CONTA</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;