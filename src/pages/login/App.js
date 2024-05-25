import matematicas from '../../assets/matematicas.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className='initial-div'>
      <div className='left-title'>
        <h1>Faça o login para iniciar seus estudos.</h1>
        <img src={matematicas} alt="logo"/>
      </div>
      <div className='login'>
        <h1>Login</h1>
        <hr></hr>
        <h2>Usuário</h2>
        <TextField
          required
          id="outlined-required"
          label="User"
          fullWidth
        />
        <h2>Senha</h2>
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          fullWidth
        />
        <div><Button variant="contained" fullWidth>LOGIN</Button></div>
      </div>
    </div>
  );
}

export default App;
