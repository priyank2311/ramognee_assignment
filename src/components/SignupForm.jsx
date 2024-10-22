import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    state: '',
    city: '',
    pinCode: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};

    if (!formData.firstName.trim()) {
      formErrors.firstName = 'Please Enter a valid First Name';
    }

    if (!formData.lastName.trim()) {
      formErrors.lastName = 'Please Enter a valid Last Name';
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Please Enter a valid Email address';
    }

    if (!formData.mobile) {
      formErrors.mobile = 'Please Enter a valid Mobile Number';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      formErrors.mobile = 'Mobile number must be 10 digits';
    }

    if (!formData.country) {
      formErrors.country = 'Please Enter a valid Country';
    }

    if (!formData.state) {
      formErrors.state = 'Please Enter a valid State';
    }

    if (!formData.city) {
      formErrors.city = 'Please Enter a valid City';
    }

    if (!formData.pinCode) {
      formErrors.pinCode = 'Please Enter a valid Pin Code';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      formErrors.password = 'Password must be at least 8 characters long';
    }

    if (!formData.confirmPassword) {
      formErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    return formErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted successfully!', formData);
      navigate('/login');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-[580px] h-auto flex flex-col items-center p-4 rounded-[18px] bg-slate-400 overflow-y-auto'>
      {/* First Name */}
      <div className='flex w-full justify-between mb-4'>
        <label className='font-[600] text-2xl mb-2'>First Name</label>
        <div className='relative'>
          <input
            className={`border-none w-[330px] h-auto rounded-[14px] p-2 text-[20px] ${errors.firstName ? 'border-red-500' : ''}`}
            type="text"
            name="firstName"
            onChange={handleChange}
            placeholder="First Name"
            value={formData.firstName}
          />
          <div className="min-h-[1rem]">
            {errors.firstName && <p className="text-red-700 text-[1rem] mt-1">{errors.firstName}</p>}
          </div>
        </div>
      </div>

      {/* Last Name */}
      <div className='flex w-full justify-between mb-4'>
        <label className='font-[600] text-2xl mb-2'>Last Name</label>
        <div className='relative'>
          <input
            className={`border-none w-[330px] h-auto rounded-[14px] p-2 text-[20px] ${errors.lastName ? 'border-red-500' : ''}`}
            type="text"
            name="lastName"
            onChange={handleChange}
            placeholder="Last Name"
            value={formData.lastName}
          />
          <div className="min-h-[1rem]">
            {errors.lastName && <p className="text-red-700 text-[1rem] mt-1">{errors.lastName}</p>}
          </div>
        </div>
      </div>

      {/* Email */}
      <div className='flex w-full justify-between mb-4'>
        <label className='font-[600] text-2xl mb-2'>Email</label>
        <div className='relative'>
          <input
            className={`border-none w-[330px] h-auto rounded-[14px] p-2 text-[20px] ${errors.email ? 'border-red-500' : ''}`}
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            value={formData.email}
          />
          <div className="min-h-[1rem]">
            {errors.email && <p className="text-red-700 text-[1rem] mt-1">{errors.email}</p>}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='flex w-full justify-between mb-4'>
        <label className='font-[600] text-2xl mb-2'>Mobile</label>
        <div className='relative'>
          <input
            className={`border-none w-[330px] h-auto rounded-[14px] p-2 text-[20px] ${errors.mobile ? 'border-red-500' : ''}`}
            type="text"
            name="mobile"
            onChange={handleChange}
            placeholder="Mobile Number"
            value={formData.mobile}
          />
          <div className="min-h-[1rem]">
            {errors.mobile && <p className="text-red-700 text-[1rem] mt-1">{errors.mobile}</p>}
          </div>
        </div>
      </div>

      {/* Country */}
      <div className='flex w-full justify-between mb-4'>
        <label className='font-[600] text-2xl mb-2'>Country</label>
        <div className='relative'>
          <input
            className={`border-none w-[330px] h-auto rounded-[14px] p-2 text-[20px] ${errors.country ? 'border-red-500' : ''}`}
            type="text"
            name="country"
            onChange={handleChange}
            placeholder="Country"
            value={formData.country}
          />
          <div className="min-h-[1rem]">
            {errors.country && <p className="text-red-700 text-[1rem] mt-1">{errors.country}</p>}
          </div>
        </div>
      </div>

      {/* State */}
      <div className='flex w-full justify-between mb-4'>
        <label className='font-[600] text-2xl mb-2'>State</label>
        <div className='relative'>
          <input
            className={`border-none w-[330px] h-auto rounded-[14px] p-2 text-[20px] ${errors.state ? 'border-red-500' : ''}`}
            type="text"
            name="state"
            onChange={handleChange}
            placeholder="State"
            value={formData.state}
          />
          <div className="min-h-[1rem]">
            {errors.state && <p className="text-red-700 text-[1rem] mt-1">{errors.state}</p>}
          </div>
        </div>
      </div>

      {/* City */}
      <div className='flex w-full justify-between mb-4'>
        <label className='font-[600] text-2xl mb-2'>City</label>
        <div className='relative'>
          <input
            className={`border-none w-[330px] h-auto rounded-[14px] p-2 text-[20px] ${errors.city ? 'border-red-500' : ''}`}
            type="text"
            name="city"
            onChange={handleChange}
            placeholder="City"
            value={formData.city}
          />
          <div className="min-h-[1rem]">
            {errors.city && <p className="text-red-700 text-[1rem] mt-1">{errors.city}</p>}
          </div>
        </div>
      </div>

      {/* Pin Code */}
      <div className='flex w-full justify-between mb-4'>
        <label className='font-[600] text-2xl mb-2'>Pin Code</label>
        <div className='relative'>
          <input
            className={`border-none w-[330px] h-auto rounded-[14px] p-2 text-[20px] ${errors.pinCode ? 'border-red-500' : ''}`}
            type="number"
            name="pinCode"
            onChange={handleChange}
            placeholder="Pin Code"
            value={formData.pinCode}
          />
          <div className="min-h-[1rem]">
            {errors.pinCode && <p className="text-red-700 text-[1rem] mt-1">{errors.pinCode}</p>}
          </div>
        </div>
      </div>

      {/* Password */}
      <div className='flex w-full justify-between mb-4'>
        <label className='font-[600] text-2xl mb-2'>Password</label>
        <div className='relative'>
          <input
            className={`border-none w-[330px] h-auto rounded-[14px] p-2 text-[20px] ${errors.password ? 'border-red-500' : ''}`}
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            value={formData.password}
          />
          <div className="min-h-[1rem]">
            {errors.password && <p className="text-red-700 text-[1rem] mt-1">{errors.password}</p>}
          </div>
        </div>
      </div>

      {/* Confirm Password */}
      <div className='flex w-full justify-between mb-4'>
        <label className='font-[600] text-2xl mb-2'>Confirm Password</label>
        <div className='relative'>
          <input
            className={`border-none w-[330px] h-auto rounded-[14px] p-2 text-[20px] ${errors.confirmPassword ? 'border-red-500' : ''}`}
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
          />
          <div className="min-h-[1rem]">
            {errors.confirmPassword && <p className="text-red-700 text-[1rem] mt-1">{errors.confirmPassword}</p>}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button className='w-[140px] h-[40px] bg-red-500 text-white font-[600] rounded-[18px]' type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
