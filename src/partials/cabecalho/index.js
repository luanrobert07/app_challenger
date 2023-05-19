import Logo from '../../imagens/logo.png'
import { Stack } from '@mui/material';

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
  <h1>internet meter</h1>
</Stack>

  );
}

export default Cabecalho;
