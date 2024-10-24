const Login = ({ handleLogin }) => {
  return (
    <>
      <div className="login_form p-3">
        <button
          className="btn btn-outline-warning"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
