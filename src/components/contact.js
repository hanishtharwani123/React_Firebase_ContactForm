import React, { useState } from "react";
import "../components/contact.css";

const Contact = () => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://reactcontactform-51a27-default-rtdb.firebaseio.com/reactcontactform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          message: user.message,
        }),
      }
    );

    if (res) {
      setUser({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
      alert("Data Stored");
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="contact">Contact Us</h1>
        <form action="" className="main" onSubmit={postData} method="POST">
          <div className="card">
            <div className="box1">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={user.name}
                onChange={getUserData}
                name="name"
                autoComplete="off"
                required
              />
            </div>
            <div className="box1">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={getUserData}
                name="email"
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="card">
            <div className="box1">
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                value={user.phone}
                onChange={getUserData}
                name="phone"
                autoComplete="off"
                required
              />
            </div>
            <div className="box1">
              <label htmlFor="">Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                value={user.address}
                onChange={getUserData}
                name="address"
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="card2">
            <label htmlFor="">Message</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              value={user.message}
              onChange={getUserData}
            ></textarea>
          </div>
          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
