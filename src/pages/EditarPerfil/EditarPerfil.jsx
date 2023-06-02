import "./EditarPerfil.css"
import {useState} from "react"
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


function EditarPerfil() {
    let {nome_loja, email, nome} = localStorage;
    nome_loja = JSON.parse(nome_loja);
    nome = JSON.parse(nome);
    email = JSON.parse(email);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nome,
        nome_loja,
        email,
        senha: "",
        senhaConfirmacao: ""
    })
    const [error, setError] = useState("");
    const [isEditable, setIsEditable] = useState(true);

    function handleClick() {
      navigate("/perfil");
    }


    function handleSubmit(event) {
        event.preventDefault();
        setError("");
      
        if (form.nome === "") {
          setError("O nome não pode ser vazio!");
          return;
        }
        
        if (form.nome_loja === "") {
          setError("O nome da loja não pode ser vazio!");
          return;
        }
      
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
          setError("E-mail está em um formato inválido!");
          return;
        }
      
        if (form.senhaConfirmacao !== form.senha) {
          setError("As senhas não coincidem!");
          return;
        }
      
        localStorage.setItem("nome", JSON.stringify(form.nome));
        localStorage.setItem("nome_loja", JSON.stringify(form.nome_loja));
        localStorage.setItem("email", JSON.stringify(form.email));
        localStorage.setItem("senha", JSON.stringify(form.senha));
        localStorage.setItem("senhaConfirmacao", JSON.stringify(form.senhaConfirmacao));
      
        navigate("/perfil");
      }
      

      function handleInputChange(e) {
        if (isEditable) {
          const { name, value } = e.target;
      
          if (name) {
            setForm({
              ...form,
              [name]: value,
            });
      
            localStorage.setItem(name, JSON.stringify(value));
          }
        }
      }
      

    function handleCancel() {
        setIsEditable(false);
      
        const previousNome = JSON.parse(localStorage.getItem("nome"));
        const previousNomeLoja = JSON.parse(localStorage.getItem("nome_loja"));
        const previousEmail = JSON.parse(localStorage.getItem("email"));
        const previousSenha = JSON.parse(localStorage.getItem("senha"));
        const previousSenhaConfirmacao = JSON.parse(localStorage.getItem("senhaConfirmacao"));
      
        setForm({
          nome: previousNome || "",
          nome_loja: previousNomeLoja || "",
          email: previousEmail || "",
          senha: previousSenha || "",
          senhaConfirmacao: previousSenhaConfirmacao || ""
        });
      
        navigate("/perfil");
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
            <input type="text" 
                name="nome" 
                value={form.nome} 
                onChange={(e) => handleInputChange(e)}
                readOnly={!isEditable}
            />

            <div className="label-container">
                <label>Nome da loja</label>
            </div>          
            <input type="text" 
                name="nome_loja" 
                value={form.nome_loja} 
                onChange={(e) => handleInputChange(e)}
                readOnly={!isEditable}
            />

            <div className="label-container">
                <label>E-mail</label>
            </div>          
            <input type="text" 
                name="email" 
                value={form.email} 
                onChange={(e) => handleInputChange(e)}
                readOnly={!isEditable}
                
            />

            <div className="label-container">
                <label>Senha</label>
            </div>          
            <input type="text" 
                name="senha" 
                value={form.senha} 
                onChange={(e) => handleInputChange(e)}
                readOnly={!isEditable}
            />

            <div className="label-container">
            <label>Repita a nova senha</label>
          </div>          
          <input type="text" 
            name="senhaConfirmacao" 
            value={form.senhaConfirmacao} 
            onChange={(e) => handleInputChange(e)}
            readOnly={!isEditable}
          />
            <div className="cancel-add-wrapper">
                <button className="cancel" onClick={handleCancel}>
                    <Link to="/perfil">
                        Cancelar
                    </Link>
                </button>
                {isEditable && (
                    <Button 
                      text="Editar Perfil" 
                      goTo="/perfil/editar" 
                      type="button" 
                      onClick={handleClick} 
                    />
                )}

                {error && <span className="error">{error}</span>}
            </div>
        </form>
      </div>
  </div>
  )
}

export default EditarPerfil