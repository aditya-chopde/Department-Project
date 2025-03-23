import API from "@/lib/baseUrl";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

const GetBlogPosts = () => {
  const [data, setData] = useState([]);
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
    const words = text.split(" ").filter(word => word !== ""); // Remove extra spaces
  
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
  }
  

  return (
    <div className="mx-10 my-5">
      <h1 className="font-bold text-2xl">Text Posts</h1>
      <div className="my-5 flex flex-row gap-5 flex-wrap">
        {data.map((item: {_id: string, title:string, content: string, status: string}) => (
          <div
            key={item._id}
            className="border-2 rounded-sm border-md p-5 flex flex-row gap-5 justify-between w-full"
          >
            <div>
              <h1 className="font-bold text-xl">{item.title}</h1>
              <p>{stripHtml(item.content, 30)}</p>
            </div>
            <div className="mt-5">
              <Button>{item.status}</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetBlogPosts;
