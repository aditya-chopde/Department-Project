import React, { useState } from "react";
import axios from "axios"

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [department, setDepartment] = useState("")
  const [year, setYear] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignup(e){
    try {
      e.preventDefault();
      const formData = {
        name,email,department,year, phone, password
      }
      await axios.post("http://localhost:3000/api/user/signup", formData).then((res)=>{
        alert(res.data.message)
        console.log(res)
      });
    } catch (error) {
      alert("Error Ocurred: "+error.message);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center my-12">
      <div className="w-[450px] border p-10 rounded-md">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Create Account</h1>
        </div>
        <div>
          <form onSubmit={handleSignup}>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Name: </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="eg. Sham Jadhav"
                onChange={(e)=> setName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Email: </legend>
              <input
                type="email"
                className="input w-full"
                placeholder="eg. shamjadhav@gmail.com"
                onChange={(e)=> setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Department: </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="eg. Computer Engineering"
                onChange={(e)=> setDepartment(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Select Year: </legend>
              <select defaultValue="Pick a browser" className="select w-full" onChange={(e)=> setYear(e.target.value)}>
                <option disabled={true}>Pick a Option</option>
                <option>First Year</option>
                <option>Second Year</option>
                <option>Third Year</option>
                <option>Alumni</option>
              </select>
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Password: </legend>
              <input
                type="number"
                className="input w-full"
                placeholder="eg. 9657393894"
                onChange={(e)=> setPhone(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Password: </legend>
              <input
                type="password"
                className="input w-full"
                placeholder="eg. ********"
                onChange={(e)=> setPassword(e.target.value)}
              />
            </fieldset>
            <div>
              <button className="btn btn-primary w-full my-2">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
