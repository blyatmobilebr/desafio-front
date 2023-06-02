import { useState } from "react";
import "./SignUp.css"
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
    const [form, setForm] = useState({
        nome: "",
        nome_loja: "",
        email: "",
        senha: "",
        senhaConfirmacao: ""
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();


    function handleInputChange(e) {
        const { name, value } = e.target;

        if (name) {
            setForm({
                ...form,
                [name]: value
            });
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
    
        if (!form.nome || !form.email || !form.nome_loja || !form.senha || !form.senhaConfirmacao) {
            setError("TODOS os campos são obrigatórios!");
            
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))) {
            setError("E-mail está num formato inválido!");
        } else if (form.senhaConfirmacao !== form.senha) {
            setError("As senhas não coincidem!");
        } else {
            setError("");
            navigate("/sign-in");
        }

        localStorage.setItem("nome", JSON.stringify(form.nome));
        localStorage.setItem("nome_loja", JSON.stringify(form.nome_loja));
        localStorage.setItem("email", JSON.stringify(form.email));
        localStorage.setItem("senha", JSON.stringify(form.senha));
        localStorage.setItem("senhaConfirmacao", JSON.stringify(form.senhaConfirmacao));
    }
        

    return (
        <div className="wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <h4 className="form-title">Criar uma conta</h4>

                <div className="label-div">
                    <label className="label">Seu nome</label>
                </div>
                <input
                    className="input"
                    type="text"
                    onChange={(event) => handleInputChange(event)}
                    value={form.nome}
                    name="nome"
                />

                <label className="label">Nome da loja</label>
                <input
                    className="input"
                    type="text"
                    onChange={(event) => handleInputChange(event)}
                    value={form.nome_loja}
                    name="nome_loja"
                />

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
                
                <label className="label">Repita a senha</label>
                <input
                    className="input"
                    type="password"
                    onChange={(event) => handleInputChange(event)}
                    value={form.senhaConfirmacao}
                    name="senhaConfirmacao"
                />

                {error && <span className="error">{error}</span>}

                <button className="form-button send-button" type="submit">
                    CRIAR CONTA
                </button>

                <p className="paragraph">
                    Já possui uma conta? <Link className="link" to="/sign-in" >ACESSE</Link>
                </p>
            </form>
        </div>
    );
}

export default SignUp;
