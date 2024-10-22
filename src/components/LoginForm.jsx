import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isForgetPassword, setIsForgetPassword] = useState(false); // State for toggling between login and forget password
  const navigate = useNavigate();

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Enable button only if both email and password are filled
    setIsFormValid(email !== '' && password !== '');
  }, [email, password]);

  const validate = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Please enter a valid Email address';
    }

    if (!isForgetPassword) {
      // Only validate the password if it's a login form
      if (!password) {
        formErrors.password = 'Password is required';
      } else if (password.length < 8) {
        formErrors.password = 'Password must be at least 8 characters long';
      }
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields before submission
    if (validate()) {
      if (isForgetPassword) {
        // Handle forget password logic
        console.log('Reset password email sent to:', email);
      } else {
        navigate('/products'); // Navigate to ProductList on successful login validation
      }
    }
  };

  const handleForgetPassword = () => {
    // Toggle between forget password and login forms
    setIsForgetPassword(true);
  };

  const handleResetPassword = () => {
    if (validate()) {
      console.log('Password reset request submitted for:', email);
      // Add your reset password logic here (e.g., API call)
    }
  };

  const handleBackToLogin = () => {
    setIsForgetPassword(false);
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <div className="w-[400px] h-auto flex flex-col gap-2 items-center p-4 rounded-[18px] bg-slate-400">
      {isForgetPassword ? (
        // Forget Password Form
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
          <h2 className="text-xl font-bold mb-2">Reset Password</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`border-none w-[330px] h-auto rounded-[14px] p-2 text-[20px] ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <span className="text-red-700 text-[1rem]">{errors.email}</span>}
          
          <div className='flex gap-4'>
            <button type="button" onClick={handleResetPassword} className="mt-4 p-2 rounded-[14px] bg-blue-500 text-white">
              Reset Password
            </button>
            <button type="button" onClick={handleBackToLogin} className="mt-4 p-2 rounded-[14px] bg-gray-500 text-white">
              Back to Login
            </button>
          </div>
        </form>
      ) : (
        // Login Form
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
          <h2 className="text-xl font-bold mb-2">Login</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={`border-none w-[330px] h-auto rounded-[14px] p-2 text-[20px] ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <span className="text-red-700 text-[1rem]">{errors.email}</span>}

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={`border-none w-[330px] h-auto rounded-[14px] p-2 text-[20px] ${errors.password ? 'border-red-500' : ''}`}
          />
          {errors.password && <span className="text-red-700 text-[1rem]">{errors.password}</span>}

          <div className="flex gap-4">
            <button type="submit" disabled={!isFormValid} className="mt-4 p-2 rounded-[14px] bg-blue-500 text-white">
              Log In
            </button>
            <button
              type="button"
              onClick={handleForgetPassword}
              className="mt-4 p-2 rounded-[14px] bg-red-500 text-white"
            >
              Forget Password
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
