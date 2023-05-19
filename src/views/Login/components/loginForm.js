import { useState } from 'react';
import './loginForm.css';
import { useNavigate } from "react-router-dom";
import { validateLogin } from '../../../data/login';

export function LoginForm() {
    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateLogin(username, password)) {
            alert(`Wrong username or password`);
        } else {
            navigate('/dashboard');
        }
    }

    return (
        <form class="form_style">
            <div>
                <h1 class="form_title">Login</h1>
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
                <button type="submit" class="form_submit_button" onClick={handleSubmit}>Login</button>
            </div>
        </form>
    )
}

