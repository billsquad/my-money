import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { useSignin } from "../../hooks/useSignin";

import styles from "./AuthForm.module.css";

const AuthForm = ({ mode = "signin" }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isPending, error } = useSignup();
  const { signin, isSigninPending, signinError } = useSignin();

  const handleSubmit = (e) => {
    e.preventDefault();

    mode === "signin"
      ? signin(email, password)
      : signup(username, email, password);
  };

  return (
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      <h2>{mode === "signin" ? "Signin Form" : "Signup Form"}</h2>
      {mode === "signup" && (
        <label>
          <span>username:</span>
          <input
            type="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>
      )}
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {isPending || isSigninPending ? (
        <button className="btn" disabled>
          Loading
        </button>
      ) : (
        <button className="btn">
          {mode === "signin" ? "Sign In" : "Sign Up"}
        </button>
      )}
      {(error || signinError) && (
        <p className="error">{error || signinError}</p>
      )}
    </form>
  );
};

export default AuthForm;
