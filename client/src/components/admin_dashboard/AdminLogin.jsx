import React from "react";

const AdminLogin = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-[450px] border p-10 rounded-md">
        <div>
          <form className="">
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Password: </legend>
              <input
                type="password"
                className="input w-full"
                placeholder="eg. ********"
              />
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

export default AdminLogin;
