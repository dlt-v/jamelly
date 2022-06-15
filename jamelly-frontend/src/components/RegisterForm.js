import React, { useState } from "react";

function RegisterForm({ changePage, error }) {
  const [details, setDetails] = useState({
    username: null,
    email: null,
    password1: null,
    password2: null,
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    if (details.password1 != details.password2) {
      alert("Passwords do not match!");
      return;
    }

    if (
      details.password1 === null ||
      details.password2 === null ||
      details.email === null ||
      details.username === null
    ) {
      alert("Please fill all boxes.");
      return;
    }

    await fetch(`http://127.0.0.1:8000/register/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: `${details.email}`,
        username: `${details.username}`,
        password: `${details.password1}`,
        password2: `${details.password2}`,
      }),
    })
      .then((response) => response.json())
      .then(data => {if (data.response === "Successfully registered new user.") {
        changePage();
      }else{
        alert("This user already exists!")
      }})
      .then((result) => console.log(result.json()))
      .catch((error) => console.log(error));

  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>
          <p id="Jam3">Jam</p>
          <p id="elly3">elly</p>
        </h1>
        <div id="Registerform">
          <p>Register:</p>
          <input
            type="email"
            name="email"
            id="emailRegister"
            placeholder="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
          <input
            type="text"
            name="username"
            id="usernameRegister"
            placeholder="username"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            id="passwordRegister1"
            placeholder="password"
            onChange={(e) =>
              setDetails({ ...details, password1: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            id="passwordRegister2"
            placeholder="confirm password"
            onChange={(e) =>
              setDetails({ ...details, password2: e.target.value })
            }
          />
          <div>
            <input type="submit" value="Register" id="RegisterSubmit" />
          </div>
        </div>
      </form>
      <button onClick={changePage} id="register">
        Back
        </button>
    </div>
  );
}

export default RegisterForm;
