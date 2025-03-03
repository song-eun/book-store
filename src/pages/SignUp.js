import "./Form.css";

const Signup = () => {
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
          <button>Sign up</button>
        </form>
        <button>Log in</button>
      </div>
    </div>
  );
};

export default Signup;
