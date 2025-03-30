import API from "@/lib/baseUrl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "../ui/button";

const AddTextPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  async function handleCreatePost(e: { preventDefault: () => void }) {
    try {
      e.preventDefault();
      const formData = { user, title, description };
      await API.post("/upload/textdata", formData).then((res) => {
        alert(res.data.message);
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
              <Input type="text" placeholder="eg. Something Big Is Coming" required onChange={(e) => setTitle(e.target.value)} className="my-3"/>
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Enter Content: </legend>
              <Textarea className="textarea w-full my-3"
                onChange={(e) => setDescription(e.target.value)}
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
  );
};

export default AddTextPost;
