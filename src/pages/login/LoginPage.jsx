import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginProvider";
import "./LoginPage.css";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const { logIn, getAccounts } = useContext(LoginContext)
  const [loginFailed, setLoginFailed] = useState(null)
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    // if username is equal to password then log user in and redirect to /merchant-list otherwise set login as failed
    if (getAccounts[data.username] === data.password) {
      logIn()
      setLoginFailed(false)
      history.push('/merchant-list')
    } else {
      setLoginFailed(true)
    }
  }

  return (
    <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
      <img
        alt=""
        className="mb-4"
        height="72"
        src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg"
        width="72"
      />

      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label className="sr-only" htmlFor="inputUsername">
        Username
      </label>
      <input
        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
        id="inputUsername"
        placeholder="Username"
        type="text"
        ref={register({ required: true })}
        name='username'
      />
  
      <label className="sr-only" htmlFor="inputPassword">
        Password
      </label>
      <input
        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        id="inputPassword"
        placeholder="Password"
        type="password"
        name='password'
        ref={register({ required: true })}
      />

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
      {loginFailed ? <div>Incorrect username or password</div> : null}
      <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
    </form>
  );
};

export default LoginPage;
