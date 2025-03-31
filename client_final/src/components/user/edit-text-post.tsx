import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "../ui/button";
import API from '@/lib/baseUrl';

const EditTextPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const user = localStorage.getItem("user");
  const {textId} = useParams();
  const navigate = useNavigate();

  const handleEditPost = async (e: { preventDefault: () => void })=>{
    try {
      e.preventDefault();
      const formData = { user, title, description };
      await API.post(`/upload/textdata/edit/${textId}`, formData).then((res) => {
        alert(res.data.message);
        console.log(res.data)
        navigate("/user-dashboard", { replace: true });
        setTitle("");
        setDescription("");
      });
    } catch (error) {
      if (error instanceof Error) {
        alert("Error Ocurred: " + error.message);
        console.log(error.message)
      } else {
        alert("An unknown error occurred");
      }
    }
  }

  const fetchFields = async () => {
    API.get(`/upload/get-single-text/${textId}`).then((res)=>{
      setTitle(res.data.data.title)
      setDescription(res.data.data.description)
    }).catch((err)=>{
      alert("Error Occurred: " + err.message)
    })
  }

  useEffect(()=>{
    fetchFields();
  }, [])

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="w-[450px] border p-10 rounded-md">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Add Post</h1>
        </div>
        <div>
          <form onSubmit={handleEditPost}>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Title: </legend>
              <Input type="text" placeholder="eg. Something Big Is Coming" required onChange={(e) => setTitle(e.target.value)} className="my-3" value={title}/>
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Content: </legend>
              <Textarea className="textarea w-full my-3"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="eg. This is the sample description for the placeholder of the textarea"/>
            </fieldset>
            <div>
              <Button className="btn btn-primary w-full my-2" type="submit">
                Add Post
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditTextPost
