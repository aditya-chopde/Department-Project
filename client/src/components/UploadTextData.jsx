import React from "react";

const UploadTextData = () => {
  return (
    <div className="border w-[425px] mx-auto my-5 py-5 px-5 rounded-md">
      <form className="w-full mx-auto">
        <h1 className="text-center font-bold text-xl">Add a Post</h1>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">What is your name?</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Eg. Sham Jadhav"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">What is your email?</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Eg. shamjadhav@gmail.com"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">What is your department?</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Eg. Computer Engineering"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Browsers</legend>
          <select defaultValue="Pick a browser" className="select w-full">
            <option disabled={true}>Pick a year</option>
            <option>1st year</option>
            <option>2nd Year</option>
            <option>3rd year</option>
            <option>Alumini</option>
          </select>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">What is your phone?</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Eg. 9657393894"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Title: </legend>
          <input type="text" className="input w-full" placeholder="Title" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Description: </legend>
          <textarea
            className="textarea w-full"
            placeholder="Description"
          ></textarea>
        </fieldset>
        <div className="my-3">
          <button className="btn btn-primary w-full">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UploadTextData;
