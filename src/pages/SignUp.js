import "./Form.css";

const SignUp = () => {
  return (
    <div className="page-wrapper">
      <div className="auth-form-container">
        <h1>Sign Up</h1>
        <form className="auth-form">
          <label>
            Email
            <input type="email" />
          </label>
          <label>
            ID
            <input type="text" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
          <label>
            Confirm Password
            <input type="password" />
          </label>
          <button>Sign Up</button>
        </form>
        <button>Login</button>
      </div>
    </div>
  );
};

export default SignUp;
