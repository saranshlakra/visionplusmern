import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import signinImage from "./img/singinImage.jpg";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials" + res.status + email + " " + password);
    } else {
      window.alert("Login Successfull" + res.status);
      console.log(res.status);
      console.log("logdata", data);
      sessionStorage.setItem("UserName", data.name);
      history.push("/TestPage");
    }
  };
  return (
    <>
      <section className="register-page">
        <div className="container mt-5 mb-5">
          <div className="register-content item-center">
            <div className="signup-form">
              <h2 className="form-title">Log in</h2>
              {/* <form className='register-form' id='registration-form'>
                        <div className='form-group'>
                            <label htmlFor="name"></label>
                            <input type="text" name='name' id='name' autoComplete='off' placeholder='Name'/>
                        </div>
                    </form> */}

              <div className="register-content col for-width">
                <figure>
                  <img src={signinImage} alt="signin image" id="signin-img" />
                </figure>
              </div>
              <form method="POST">
                <div>
                  <label for="email" class="form-label"></label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label for="password" class="form-label"></label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <br />
                <button
                  type="submit"
                  onClick={loginUser}
                  class="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
