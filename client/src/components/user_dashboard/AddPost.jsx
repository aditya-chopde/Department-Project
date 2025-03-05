import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  async function handleCreatePost(e){
    try {
      e.preventDefault();
      const formData = {user, title, description}
      await axios.post("http://localhost:3000/api/upload/textdata", formData).then((res)=>{
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
          <h1 className="font-bold text-2xl">Add Post</h1>
        </div>
        <div>
          <form onSubmit={handleCreatePost}>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Title: </legend>
              <input type="text" className="input w-full" onChange={(e)=> setTitle(e.target.value)} placeholder="eg. Sham Jadhav" />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Description: </legend>
              <textarea className="textarea w-full" onChange={(e)=> setDescription(e.target.value)} placeholder="Description"></textarea>
            </fieldset>
            <div>
                <button className="btn btn-primary w-full my-2" type='submit'>Add Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddPost
