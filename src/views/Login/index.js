import React from 'react';
import Logo from '../../imagens/Logo_completo_BG_branco.webp';
import './loginStyle.css';
import { Link } from 'react-router-dom';
import { LoginForm } from './components/loginForm'

function Login() {

    return (
            <div class="container_pag_login">
                <div class="upper_login">
                    <div class="cabecalho_login">
                        <Link class = "link_pag_login" to="/"><div class="back_container_pag_login"> <p class="text_back_pag_login">← Voltar</p> </div></Link>
                        <div class="image_container_pag_login"><img src={Logo} alt="Logo" class='logo_image_pag_login' /></div>
                    </div>
                </div>
                <div class="lower_login">
                    <div class="container_login">
                        <LoginForm/>
                    </div>
                </div>
            </div>
    );
}

export default Login;