// components/RegisterForm.js
"use client";
import Image from "next/image";
import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <div className="subContainer">
      <div className="backgroundImg">
        <Image
          src={"/rightImg1.png"}
          alt="Home Page"
          width={713}
          height={713}
          className="rightImg1"
        />
        <Image
          src={"/Vector.png"}
          alt="Home Page"
          width={1919}
          height={496}
          className="vector"
        />
      </div>
      <div className="register-form">
        <div className="form-header">
          <Image
            src={"/fullLogo.png"}
            alt="Home Page"
            width={411}
            height={100}
            className="fullLogo"
          />
        </div>
        <div className="form-body">
          <h2>
            Are you still confused about your business incorporation?
            <span> Take the first step </span> by filling out the form below.
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="mobile-input">
              <select name="countryCode" defaultValue="IN(+91)">
                <option value="IN(+91)">IN(+91)</option>
                {/* Add other country codes here */}
              </select>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Get Expert Advice Now!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
