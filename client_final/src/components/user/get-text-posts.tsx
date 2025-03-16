import API from "@/lib/baseUrl";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

const GetTextPosts = () => {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    getTextData();
  }, []);

  return (
    <div className="mx-10 my-5">
      <h1 className="font-bold text-2xl">Text Posts</h1>
      <div className="my-5 flex flex-row gap-5 flex-wrap">
        {data.map((item: {_id: string, title:string, description: string, status: string}) => (
          <div
            key={item._id}
            className="my-3 border-2 rounded-sm border-md p-5 flex flex-col justify-between w-[25%]"
          >
            <div>
              <h1 className="font-bold text-xl">{item.title}</h1>
              <p>{item.description}</p>
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

export default GetTextPosts;
