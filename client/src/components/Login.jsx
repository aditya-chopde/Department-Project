import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="w-[450px] border p-10 rounded-md">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Login</h1>
        </div>
        <div>
          <form className="">
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Name: </legend>
              <input type="text" className="input w-full" placeholder="eg. Sham Jadhav" />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Email: </legend>
              <input type="text" className="input w-full" placeholder="eg. shamjadhav@gmail.com" />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Password: </legend>
              <input type="text" className="input w-full" placeholder="eg. ********" />
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
