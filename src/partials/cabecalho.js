import Logo from '../imagens/logo.png'

function Cabecalho() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={Logo} alt="Logo" style={{ marginRight: "10px" }} />
      <h1>internet meter</h1>
    </div>
  );
}

export default Cabecalho;
