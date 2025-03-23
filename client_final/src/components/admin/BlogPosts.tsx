import API from "@/lib/baseUrl";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Bounce, toast } from "react-toastify";

const BlogPosts = () => {
  const [data, setData] = useState([]);

  async function getBlogData() {
    try {
      await API.get("/admin/get-blogs").then((res) => {
        const blogsData = res.data.data;
        setData(blogsData.reverse());
      });
    } catch (error) {
      alert("An Error Ocurred: " + (error as Error).message);
    }
  }

  useEffect(() => {
    getBlogData();
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

  const approveBlogPost = async (id: string) => {
    await API.post(`/admin/approve-blog/${id}`)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          getBlogData();
        } else {
          toast.error(res.data.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const rejectBlogPost = async (id: string) => {
    await API.post(`/admin/reject-blog/${id}`)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          getBlogData();
        } else {
          toast.error(res.data.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              className="border-2 rounded-sm border-md p-5 flex flex-row gap-5 justify-between w-full"
            >
              <div>
                <h1 className="font-bold text-xl">{item.title}</h1>
                <p>{stripHtml(item.content, 15)}</p>
              </div>
              <div className="my-3">
                {item.status === "Pending" ? (
                  <div className="flex lg:flex-row flex-col gap-3">
                    <button
                      className="bg-green-500 text-white px-3 py-2 rounded-sm cursor-pointer hover:-translate-y-1 transition-all w-full"
                      onClick={() => approveBlogPost(item._id)}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-2 rounded-sm cursor-pointer hover:-translate-y-1 transition-all w-full"
                      onClick={() => rejectBlogPost(item._id)}
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <button
                    className={` ${
                      item.status === "Approved"
                        ? "bg-green-500 text-white px-3 py-2 rounded-sm cursor-pointer w-full"
                        : "bg-red-500 text-white px-3 py-2 rounded-sm cursor-pointer w-full"
                    }`}
                  >
                    {item.status}
                  </button>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BlogPosts;
