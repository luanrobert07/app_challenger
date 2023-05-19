import { useState } from 'react';
import './cadastroForm.css';
import { useNavigate } from "react-router-dom";
import { createUser } from '../../../data/login';

export function CadastroForm() {
    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        createUser(username,password)
        alert("Usuário cadastrado")
        navigate("/login")
    }

    return (
        <form class="form_style">
            <div>
                <h1 class="form_title">Cadastrar</h1>
            </div>
            <div class="form_container">
                <div class="form_input_container">
                    <label for='username' class="form_label"> Username:</label>
                    <input
                        class='form_input'
                        id='username'
                        type="text"
                        value={username}
                        onChange={(e) => setUserame(e.target.value)}

                    />
                </div>
                <div class="form_input_container">
                    <label for='password' class="form_label">
                        Password:
                    </label>
                    <input
                        class='form_input'
                        id='password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" class="form_submit_button" onClick={handleSubmit}>Cadastrar</button>
            </div>
        </form>
    )
}

