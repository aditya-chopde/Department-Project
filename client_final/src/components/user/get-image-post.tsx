import API from "@/lib/baseUrl"; // Corrected import statement
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

const GetImagePost = () => {
  const [data, setData] = useState([]);
  const user = localStorage.getItem("user") || "";
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  async function getImageData() {
    try {
      await API.get(`/user/get-image-data/${user}`).then((res) => {
        const imagePosts = res.data.posts;
        setData(imagePosts.reverse());
      });
    } catch (error) {
      alert("An Error Ocurred: " + (error as any).message);
    }
  }

  useEffect(() => {
    getImageData();
  }, []);

  return (
    <div className="mx-auto my-5 w-[90%]">
      <div>
        <h1 className="font-bold text-2xl">Recent Text Posts Requests</h1>
      </div>
      <div className="flex flex-row flex-wrap gap-3 my-3">
        {data.map(
          (item: {
            _id: string;
            path: string;
            title: string;
            status: string;
          }) => (
            <div
              key={item._id}
              className="border rounded-md p-4 my-3 lg:w-[30%] md:w[35%] w-[55%] flex flex-col justify-between"
            >
              <div>
                <p>
                  <div className="w-full h-52 bg-gray-300">
                    <img
                      src={item.path}
                      alt=""
                      className="rounded-md w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-lg mt-3">
                    <strong>{item.title}</strong>
                  </h1>
                </p>
              </div>
              <div className="mt-5 flex flex-row gap-3 justify-between items-center">
                <Button
                  variant={
                    item.status === "Rejected" ? "destructive" : "success"
                  }
                >
                  {item.status}
                </Button>

                <div className="flex flex-row gap-2 justify-center items-center">
                  <Button
                    variant={"secondary"}
                    className="cursor-pointer bg-[#1A1A1F] hover:bg-[#292930] transition-all ease-in p-3 rounded-full"
                  >
                    <Pencil size={20} />
                  </Button>
                  <Button
                    variant={"destructive"}
                    className="cursor-pointer bg-red-500 hover:bg-red-400 transition-all ease-in p-3 rounded-full"
                    onClick={() => {
                      // setPostToDelete(item._id);
                      setIsDialogOpen(true);
                    }}
                  >
                    <Trash2 size={20} />
                  </Button>
                </div>
              </div>
            </div>
          )
        )}
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
            <Button
              type="submit"
              variant={"destructive"}
              // onClick={handleDeletePost}
            >
              <Trash2 />
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GetImagePost;
