import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assest/css/SignupPage.css';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    // Thực hiện logic xử lý đăng ký (gọi API, kiểm tra thông tin, v.v.)
    navigate('/'); // Chuyển hướng đến trang Home
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="signup-title">Create Your Account</h1>
        <form className="signup-form" onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="signup-prompt">
          Already have an account?{' '}
          <button className="signup-link" onClick={() => navigate('/login')}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
