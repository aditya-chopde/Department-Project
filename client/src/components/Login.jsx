import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();
    try {
      const formData = {email, password}
      await axios.post("http://localhost:3000/api/user/login", formData).then((res)=>{
        alert(res.data.message)
        console.log(res)
        navigate("/dashboard")
      })
    } catch (error) {
      alert("Error Ocurred: "+error.message);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="w-[450px] border p-10 rounded-md">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Login</h1>
        </div>
        <div>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Email: </legend>
              <input type="text" className="input w-full" onChange={(e) => setEmail(e.target.value)} placeholder="eg. shamjadhav@gmail.com" />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Password: </legend>
              <input type="text" className="input w-full" onChange={(e)=> setPassword(e.target.value)} placeholder="eg. ********" />
            </fieldset>
            <div>
                <button className="btn btn-primary w-full my-2">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
