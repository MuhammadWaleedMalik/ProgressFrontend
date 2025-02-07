import './Login.css';


function Login() {
  return (
    <div className="login-container" >
      <div className="login-box">
        <h2>Sign in with your Fontys account.</h2>
        <input type="email" placeholder="518331@student.fontys.nl" className="input-field" />
        <input type="password" placeholder="••••••••" className="input-field" />
        <button className="sign-in-button">Sign in</button>
        <p>Signing in requires a <a href="#">Fontys account</a>.</p>
      
      </div>
    </div>
  );
}

export default Login;
