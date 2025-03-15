import API from "@/lib/baseUrl";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

const GetImagePost = () => {
  const [data, setData] = useState([]);
  const user = localStorage.getItem("user") || "";

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
        {data.map((text: {_id: string, path: string, title: string, status: string}) => (
          <div
            key={text._id}
            className="border rounded-md p-4 my-3 lg:w-[30%] md:w[35%] w-[55%] flex flex-col justify-between"
          >
            <div>
              <p>
                <div className="w-full h-52 bg-gray-300">
                  <img
                    src={text.path}
                    alt=""
                    className="rounded-md w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-lg mt-3">
                  <strong>{text.title}</strong>
                </h1>
              </p>
            </div>
            <div className="mt-5">
              <Button>{text.status}</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetImagePost;
