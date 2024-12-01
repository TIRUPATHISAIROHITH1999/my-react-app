import React, { useState } from 'react';
// import './LoginAndCred.css'; // We'll write styles here

function LoginAndCred({value}) {
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {setLoginDis}=value;

  const loaderDude=()=>{
    setLoginDis(false);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check if the entered username and password are correct
    if (username === 'user' && password === 'password') {
      setShowForm(false); // Hide the form
      setErrorMessage('');
      setLoginDis(false);
    } else {
      setErrorMessage('Incorrect username or password!');
    }
  };

  return (
    <div className="login-container">
      {/* Main Login Button */}
      {!showForm && (
        <button className="login-button" onClick={() => setShowForm(true)}>
          Login
        </button>
      )}

      {/* Form with Overlay */}
      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
              <button type="submit">Submit</button>
            </form>
            {errorMessage && <p className="error">{errorMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginAndCred;
