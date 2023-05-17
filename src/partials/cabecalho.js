import Logo from '../imagens/logo.png'

function cabecalho() {
    return (
      <div>
        <img src={Logo} alt="Logo"></img>
        <h1>internet meter</h1>
      </div>
    );
  }
  
  export default cabecalho;