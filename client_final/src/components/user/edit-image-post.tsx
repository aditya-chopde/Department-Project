import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import API from "@/lib/baseUrl";

const EditImagePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const user = localStorage.getItem("user") || "";
  const {imageId} = useParams();
  const navigate = useNavigate();

  const handleEditImage = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image before submitting!");
      return;
    }

    const formData = new FormData();
    formData.append("user", user);
    formData.append("title", title);
    formData.append("file_image", image);

    try {
      const res = await API.post(`/upload/imagedata/edit/${imageId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res.data);
      alert(res.data.message);
      navigate("/user-dashboard/get-image-posts");
    } catch (err) {
      console.log("Error Occurred: " + (err as any).message);
    }
  };

  const fetchData = async () =>{
    API.get(`/upload/get-single-image/${imageId}`).then((res)=>{
      console.log(res.data)
      setTitle(res.data.data.title)
      // setImage(res.data.data.description)
    }).catch((err)=>{
      alert("Error Occurred: " + err.message)
    })
  }

  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="w-[450px] border p-10 rounded-md">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Add Image</h1>
        </div>
        <div>
          <form onSubmit={handleEditImage}>
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

export default EditImagePost;
