import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Posts = () => {
  const [data, setData] = useState([]);
  const [dataImage, setDataImage] = useState([]);
  const user = localStorage.getItem("user");

  async function getTextData(user) {
    try {
      await axios
        .get(`http://localhost:3000/api/user/get-text-data/${user}`)
        .then((res) => {
          setData(res.data.posts);
        });
    } catch (error) {
      alert("An Error Ocurred: " + error.message);
    }
  }

  async function getImageData(user) {
    try {
      await axios
        .get(`http://localhost:3000/api/user/get-image-data/${user}`)
        .then((res) => {
          setDataImage(res.data.posts);
        });
    } catch (error) {
      alert("An Error Ocurred: " + error.message);
    }
  }

  useEffect(() => {
    getTextData(user);
    getImageData(user);
  }, []);

  return (
    <div className="my-10">
      <div className="flex flex-row gap-3 justify-center items-center my-5">
        <button className="btn btn-primary my-2">
          <Link to="/dashboard/add-post">Add Post</Link>
        </button>
        <button className="btn btn-primary my-2">
          <Link to="/dashboard/add-image">Add Image</Link>
        </button>
      </div>
      <div className="w-[875px] mx-auto">
        <div>
          <h1 className="font-bold text-2xl">Text Posts</h1>
          <div className="my-5">
            {data.map((item) => (
              <div
                key={item._id}
                className="my-3 border border-md p-3 flex flex-row justify-between items-end"
              >
                <div>
                  <h1 className="font-bold text-xl">{item.title}</h1>
                  <p>{item.description}</p>
                </div>
                <div>
                  <p>{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Image Posts</h1>
          <div className="">
            {dataImage.map((item) => (
              <div
                key={item._id}
                className="border rounded-md p-3 my-3 flex flex-row gap-5 justify-between items-end"
              >
                <div className="flex flex-row gap-5">
                  <img src={item.path} alt="image_data" className="w-36" />
                  <div>
                    <h1 className="text-xl font-bold">{item.title}</h1>
                  </div>
                </div>
                <div>
            {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
