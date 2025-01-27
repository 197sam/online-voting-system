import React from 'react';
import { GoogleLogin } from 'react-google-login';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const handleGoogleSuccess = (response) => {
    console.log('Google sign-in successful:', response.profileObj);
    alert(`Welcome, ${response.profileObj.name}`);
  };

  const handleGoogleFailure = (response) => {
    console.error('Google sign-in failed:', response);
    alert('Google Sign-In failed. Please try again.');
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100 bg-light"
      style={{ backgroundImage: 'url(background-image.jpg)', backgroundSize: 'cover' }}
    >
      <div className="card p-5 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Online Voting System</h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>
        </form>
        <div className="text-center">or</div>
        <GoogleLogin
          clientId="http://899726109475-lc2s1kbg8qdid82rvqi2ic4h7nkrfeqm.apps.googleusercontent.com" 
          buttonText="Sign in with Google"
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          cookiePolicy={'single_host_origin'}
          className="w-100 mt-3"
        />
        <p className="text-center mt-4">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
