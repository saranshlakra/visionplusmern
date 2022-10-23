import React, {useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import login from "./img/login-img.svg";

const Signup = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        name: "", 
        email: "",
        password: "",
        confirmPassword: "",
        age: ""
    });


    let name, value;
    const getUser = (e) => {
        //  console.log(e);
         name  = e.target.name;
         value = e.target.value;

         setUser({...user, [name]:value});
    }



const PostUserDetails = async (e) => {
    e.preventDefault();
    const{name,email,age, password, confirmPassword} = user; 

    const res = await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },

        body: JSON.stringify({
            name,email, age, password, confirmPassword
        })
    });

    const data =  await res.json();

    if(res.status === 422 || !data){
        window.alert("Invalid Information");
        console.log("Invalid Information");
        console.log(data);
    }else {
        window.alert("Resgistration Successfull");
        console.log("Successfull Registration");

        history.push("/signin");  // pushState is not working(not a function error)
        // history.push("/") // debugging
    }
}

  return (
    <>
      <section className  = " register-page">
        <div className='container mt-5 mb-5 col'>
            <div className='register-content item-center'>
                <div className='signup-form'>
                    <h2 className='form-title'>Sign up</h2>
                    {/* <form className='register-form' id='registration-form'>
                        <div className='form-group'>
                            <label htmlFor="name"></label>
                            <input type="text" name='name' id='name' autoComplete='off' placeholder='Name'/>
                        </div>
                    </form> */}


                <div className='register-content col for-width'>
                        <figure>
                            <img src={login} alt="" />
                        </figure>
                </div>

                    <form method='POST'>
                        <div >
                            <label for="name" className="form-label">
                            </label>
                            <input value={user.name} onChange={getUser}  type="name" name="name"className="form-control"  id="name" aria-describedby="emailHelp" placeholder='Name' />
                        </div>
                        <div >
                            <label for="email" className="form-label"></label>
                            <input value={user.email} onChange={getUser} type="email" name="email"className="form-control" id="email" aria-describedby="emailHelp" placeholder='Email' />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div >
                            <label for="password" className="form-label"></label>
                            <input value={user.password} onChange={getUser} type="password" name="password"className="form-control" id="password" placeholder='Password' />
                        </div>
                        <div >
                            <label for="confirmPassword" className="form-label"></label>
                            <input value={user.confirmPassword} onChange={getUser} type="password" name="confirmPassword"className="form-control" id="confirmPassword" placeholder='Confirm Password' />
                        </div>
                        <div >
                            <label for="age" className="form-label"></label>
                            <input value={user.age} onChange={getUser} type="date" name="age"className="form-control" id="age" aria-describedby="emailHelp" placeholder='DOB' />
                        </div>
                        {/* <div className="mb-4 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> */}
                        <br />
                        <button type="submit" onClick={PostUserDetails} className="btn btn-primary">Submit</button>
                    </form>
                </div>
                    
            </div>
        </div>
      </section>
    </> 
  )
}

export default Signup