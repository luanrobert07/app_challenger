import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../imagens/Logo_completo_BG_branco.webp';
import './paginaInicial.css';

function PaginaInicial() {

    const navigate = useNavigate();

    function handleClickLogin() {
        navigate('/login');
    }

    function handleClickCadastrar() {
        navigate('/cadastrar');
    }

    return (
        <div class = "container_pag_inicial">
            <div class  = "upper">
                <div class = "logo">
                    <img src={Logo} alt="Logo" class='logo_image' style={{ marginRight: "10px" }} />
                </div>
            </div>
            <div class = "lower">
                <div class = "pag_inicial_bg">
                    <div class="buttons_container">
                        <button class="button_redirect_pag_inicial" onClick={handleClickLogin}>Login</button>
                        <button class="button_redirect_pag_inicial" onClick={handleClickCadastrar}>Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaginaInicial;