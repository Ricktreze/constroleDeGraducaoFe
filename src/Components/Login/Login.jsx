import React, { useState } from 'react';

function Login({autorizado, setAltorizado}) {
  // Estados para armazenar o que o usuário digita
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página
  
    if (email === "Admin" && password === "123"){
        setAltorizado(true)
    }
    // Aqui você faria a chamada para sua API de autenticação
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Login</h2>
        <input 
          type="text" 
          placeholder="E-mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required ={true}
          style={styles.input}
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Entrar</button>
      </form>
    </div>
  );
}

// Estilização básica em JS (CSS-in-JS)
const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginLeft: '35%'},
  form: { display: 'flex', flexDirection: 'column', width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' },
  input: { marginBottom: '30px', padding: '10px' },
  button: { padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default Login;
