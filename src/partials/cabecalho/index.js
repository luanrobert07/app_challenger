import Logo from '../../imagens/logo.png'
import { Stack } from '@mui/material';
import './cabecalhoStyle.css'


function Cabecalho() {
  return (
    <Stack 
  direction={{ xs: 'row', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
  justifyContent="center"
  alignItems="center"
  paddingBottom={"50px"}
>
  <img src={Logo} alt="Logo" style={{ marginRight: "10px" }} />
  <h1 class="title_cabecalho">Internet Meter</h1>
</Stack>

  );
}

export default Cabecalho;
