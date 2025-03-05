import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddImage = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  async function handleImagePost(e) {
    e.preventDefault();

    console.log("Title:", title);
    console.log("Image:", image);  // Should now log a File object

    if (!image) {
      alert("Please select an image before submitting!");
      return;
    }

    const formData = new FormData();
    formData.append("user", user);
    formData.append("title", title);
    formData.append("file_image", image);  // Ensure it's being appended properly

    try {
      const res = await axios.post("http://localhost:3000/api/upload/images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(res.data.message);
      console.log(res);
      navigate("/dashboard")
    } catch (err) {
      console.log("Error Occurred: " + err.message);
    }

    console.log("Submitted");
  }

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="w-[450px] border p-10 rounded-md">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Add Image</h1>
        </div>
        <div>
          <form onSubmit={handleImagePost}>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Title: </legend>
              <input 
                type="text" 
                className="input w-full" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="eg. Sham Jadhav" 
              />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Upload Image: </legend>
              <input 
                type="file" 
                className="file-input w-full" 
                onChange={(e) => setImage(e.target.files[0])} 
                accept="image/*" // Ensure only images are selected
              />
            </fieldset>
            <div>
              <button className="btn btn-primary w-full my-2">Add Image</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddImage;
