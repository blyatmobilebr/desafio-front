import { useState } from "react";
import "./Form.css";

function Form() {
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
    
        if (!form.nome || !form.email || !form.nome_loja || !form.senha || !form.senhaConfirmacao) {
            setError("TODOS os campos são obrigatórios!");
            setSuccess("");
            
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))) {
            setError("E-mail está num formato inválido!");
            setSuccess("");
        } else if (form.senhaConfirmacao !== form.senha) {
            setError("As senhas não coincidem!");
            setSuccess("");
        } else {
            setError("");
            setSuccess("Formulário enviado com sucesso!");
        }
    }
        

    return (
        <div className="wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <h4 className="form-title">Criar uma conta</h4>


                <label className="label">Seu nome</label>
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
                {success && <span>{success}</span>}

                <button className="form-button send-button" type="submit">
                    CRIAR CONTA
                </button>

                <p className="paragraph">
                    Já possui uma conta? <a href="" className="link">ACESSE</a>
                </p>
            </form>
        </div>
    );
}

export default Form;
