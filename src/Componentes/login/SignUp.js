import React, { useState } from "react";
export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleSubmit= (e)=> {
        e.preventDefault();
        console.log(fname,lname,email,password);
        fetch("http://localhost:5000/register",{
            method: "POST",
            crossDomain: true,
            headers: {"Content-Type": "application/json", "accept": "application/json",
            "access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({fname,lname,email,password 
        }),
    }).then((res)=> res.json())
    .then((data)=> {
        console.log(data, "userRegister");
    });
}
return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
   
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          autoComplete="on"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/LoginComponent">sign in?</a>
      </p>
    </form>
  );
}