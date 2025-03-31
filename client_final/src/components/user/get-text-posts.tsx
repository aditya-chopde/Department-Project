import API from "@/lib/baseUrl";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Pencil, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Post {
  _id: string;
  title: string;
  description: string;
  status: string;
}

const GetTextPosts = () => {
  const [data, setData] = useState<Post[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const user = localStorage.getItem("user");

  async function getTextData() {
    try {
      await API.get(`/user/get-text-data/${user}`).then((res) => {
        const textPosts = res.data.posts;
        setData(textPosts.reverse());
      });
    } catch (error) {
      alert("An Error Ocurred: " + (error as Error).message);
    }
  }

  const handleDeletePost = async () => {
    try {
      await API.delete(`/user/delete-text-data/${postToDelete}`);
      setData(data.filter((item) => item._id !== postToDelete));
      setIsDialogOpen(false);
    } catch (error) {
      alert("An Error Ocurred: " + (error as Error).message);
    }
  };

  useEffect(() => {
    getTextData();
  }, []);

  return (
    <div className="mx-10 my-5">
      <h1 className="font-bold text-2xl">Text Posts</h1>
      <div className="my-5 flex flex-row gap-5 flex-wrap">
        {data.map((item) => (
          <div
            key={item._id}
            className="my-3 border-2 rounded-sm border-md p-5 flex flex-col justify-between w-[25%]"
          >
            <div>
              <h1 className="font-bold text-xl">{item.title}</h1>
              <p>{item.description}</p>
            </div>
            <div className="mt-5 flex flex-row gap-3 justify-between items-center">
              <Button variant={item.status === "Rejected" ? "destructive" : "success"}>{item.status}</Button>

              <div className="flex flex-row gap-2 justify-center items-center">
                <Button variant={"secondary"} className="cursor-pointer bg-[#1A1A1F] hover:bg-[#292930] transition-all ease-in p-3 rounded-full">
                  <Pencil size={20} />
                </Button>
                <Button variant={"destructive"}
                  className="cursor-pointer bg-red-500 hover:bg-red-400 transition-all ease-in p-3 rounded-full"
                  onClick={() => {
                    setPostToDelete(item._id);
                    setIsDialogOpen(true);
                  }}
                >
                  <Trash2 size={20} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to permanently
              delete this file from our servers?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant={"outline"} onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant={"destructive"} onClick={handleDeletePost}>
              <Trash2 />
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GetTextPosts;
