import "./Form.css";

const Login = () => {
  return (
    <div className="page-wrapper">
      <div className="auth-form-container">
        <h1> Login</h1>
        <form className="auth-form">
          <label>
            ID
            <input type="text" className="input-top" />
          </label>
          <label>
            Password
            <input type="password" className="input-bottom" />
          </label>
          <button>Log in</button>
        </form>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
