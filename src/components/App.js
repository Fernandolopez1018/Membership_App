import "./styles.css";
import { useRef, useState } from "react";

import { signup, login, useAuth, logout } from "../firebase";

export default function App() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("error");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("error");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);

    try {
      await logout();
    } catch {
      alert("error!!!");
    }
    setLoading(false);
  }

  return (
    <div id="App">
      <h1>Welcome to our Membership App</h1>
      <h3> You are currently logged in as: {currentUser?.email} </h3>
      <div id="fields">
        <input
          disabled={currentUser}
          id="button1"
          ref={emailRef}
          placeholder="email"
        />
        <input
          disabled={currentUser}
          id="button1"
          ref={passwordRef}
          type="password"
          placeholder="password"
        />

        <button
          disabled={loading || currentUser}
          id="button"
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <button
          disabled={loading || currentUser}
          id="button"
          onClick={handleLogin}
        >
          Log In
        </button>
        <button
          id="button"
          onClick={handleLogout}
          disabled={loading || !currentUser}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
