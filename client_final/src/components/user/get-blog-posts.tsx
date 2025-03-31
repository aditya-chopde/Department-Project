import API from "@/lib/baseUrl";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const GetBlogPosts = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const user = localStorage.getItem("user");

  async function getTextData() {
    try {
      await API.get(`/user/get-blog-data/${user}`).then((res) => {
        const blogsData = res.data.posts;
        setData(blogsData.reverse());
      });
    } catch (error) {
      alert("An Error Ocurred: " + (error as Error).message);
    }
  }

  useEffect(() => {
    getTextData();
  }, []);

  function stripHtml(html: string, wordLimit = 20) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const text = doc.body.textContent || "";
    const words = text.split(" ").filter((word) => word !== ""); // Remove extra spaces

    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
  }

  return (
    <div className="mx-10 my-5">
      <h1 className="font-bold text-2xl">Text Posts</h1>
      <div className="my-5 flex flex-row gap-5 flex-wrap">
        {data.map(
          (item: {
            _id: string;
            title: string;
            content: string;
            status: string;
          }) => (
            <div
              key={item._id}
              className="border-2 rounded-sm border-md p-5 flex flex-row gap-5 justify-between items-end w-full"
            >
              <Link
                to={`/user-dashboard/view/${item._id}`}
                className="flex flex-row gap-5 justify-between w-full"
              >
                <div>
                  <h1 className="font-bold text-xl">{item.title}</h1>
                  <p>{stripHtml(item.content, 30)}</p>
                </div>
              </Link>
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
                    onClick={()=> navigate(`/user-dashboard/edit/blog/${item._id}`)}
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

export default GetBlogPosts;
