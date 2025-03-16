import API from "@/lib/baseUrl";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddImagePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const user = localStorage.getItem("user") || "";
  const navigate = useNavigate();

  async function handleImagePost(e: { preventDefault: () => void }) {
    e.preventDefault();

    console.log("Title:", title);
    console.log("Image:", image);

    if (!image) {
      alert("Please select an image before submitting!");
      return;
    }

    const formData = new FormData();
    formData.append("user", user);
    formData.append("title", title);
    formData.append("file_image", image);

    try {
      const res = await API.post("/upload/images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(res.data.message);
      console.log(res);
      navigate("/user-dashboard/get-image-posts");
    } catch (err) {
      console.log("Error Occurred: " + (err as any).message);
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
              <Input
                type="text"
                className="input w-full my-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="eg. Title of the Image"
                required
              />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Upload Image: </legend>
              <Input
                type="file"
                className="file-input w-full my-3"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setImage(e.target.files[0]);
                  }
                }}
                accept="image/*" 
              />
            </fieldset>
            <div>
              <Button className="btn btn-primary w-full my-2">Add Image</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddImagePost;
