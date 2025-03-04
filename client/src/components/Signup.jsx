import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center my-12">
      <div className="w-[450px] border p-10 rounded-md">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Create Account</h1>
        </div>
        <div>
          <form className="">
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Name: </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="eg. Sham Jadhav"
              />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Email: </legend>
              <input
                type="email"
                className="input w-full"
                placeholder="eg. shamjadhav@gmail.com"
              />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Department: </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="eg. Computer Engineering"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Select Year: </legend>
              <select defaultValue="Pick a browser" className="select w-full">
                <option disabled={true}>Pick a Option</option>
                <option>First Year</option>
                <option>Second Year</option>
                <option>Third Year</option>
                <option>Alumni</option>
              </select>
              <span className="fieldset-label">Optional</span>
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Password: </legend>
              <input
                type="password"
                className="input w-full"
                placeholder="eg. ********"
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
