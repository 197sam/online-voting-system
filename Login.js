import React from "react";
import { auth, googleProvider } from "./firebase-config";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error("Error signing in with Google", error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <button onClick={handleGoogleSignIn} style={styles.googleButton}>
        Sign in with Google
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  googleButton: {
    backgroundColor: "#4285F4",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Login;
