import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../assest/css/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate(); // Hook để điều hướng

  const handleLogin = (event) => {
    event.preventDefault(); // Ngăn chặn reload trang
    // Thực hiện logic xử lý login tại đây nếu cần (gọi API, kiểm tra thông tin, v.v.)
    navigate('/'); // Chuyển hướng đến trang Home
  };

  const handleSignup = () => {
    navigate('/signup'); // Chuyển hướng đến trang Đăng ký
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Welcome Back</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-prompt">
  Don't have an account?{' '}
  <button className="signup-link" onClick={handleSignup}>
    Sign Up
  </button>
</p>

      </div>
    </div>
  );
};

export default LoginPage;
