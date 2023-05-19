import React from 'react';
import Logo from '../../imagens/Logo_completo_BG_branco.webp';
import './cadastroStyle.css';
import { Link } from 'react-router-dom';
import { CadastroForm } from './components/cadastroForm'

function cadastro() {

    return (
            <div class="container_pag_cadastro">
                <div class="upper_cadastro">
                    <div class="cabecalho_cadastro">
                        <Link class = "link_pag_cadastro" to="/"><div class="back_container_pag_cadastro"> <p class="text_back_pag_cadastro">← Voltar</p> </div></Link>
                        <div class="image_container_pag_cadastro"><img src={Logo} alt="Logo" class='logo_image_pag_cadastro' /></div>
                    </div>
                </div>
                <div class="lower_cadastro">
                    <div class="container_cadastro">
                        <CadastroForm/>
                    </div>
                </div>
            </div>
    );
}

export default cadastro;