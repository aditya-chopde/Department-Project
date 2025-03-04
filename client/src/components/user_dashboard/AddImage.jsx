import React from 'react'

const AddImage = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="w-[450px] border p-10 rounded-md">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Add Image</h1>
        </div>
        <div>
          <form className="">
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Title: </legend>
              <input type="text" className="input w-full" placeholder="eg. Sham Jadhav" />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Upload Image: </legend>
              <input type="file" className="file-input w-full" />
            </fieldset>
            <div>
                <button className="btn btn-primary w-full my-2">Add Image</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddImage
