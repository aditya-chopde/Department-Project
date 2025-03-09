import axios from "axios";
import React, { useEffect, useState } from "react";

const AllPostsComponent = () => {
  const [data, setData] = useState([]);
  const [dataImage, setDataImage] = useState([])

  async function getAllTextData() {
    try {
      await axios
        .get("http://localhost:3000/api/admin/get-text-data")
        .then((res) => {
          const postsData = res.data.data;
          const filteredData = postsData.filter(
            (item) => item.status === "Approved"
          );
          setData(filteredData);
        });
    } catch (error) {
      alert("Error Ocurred: " + error.message);
    }
  }

  async function getAllImageData() {
    try {
      await axios
        .get("http://localhost:3000/api/admin/get-image-data")
        .then((res) => {
          const postsData = res.data.data;
          const filteredData = postsData.filter(
            (item) => item.status === "Approved"
          );
          setDataImage(filteredData);
        });
    } catch (error) {
      alert("Error Ocurred: " + error.message);
    }
  }

  useEffect(() => {
    getAllTextData();
    getAllImageData();
  }, []);

  return (
    <div className="w-[950px] mx-auto my-10">
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
              <p className="font-bold">Post By:</p>
              <p>{item.name}</p>
              <p>{item.department}</p>
              <p>{item.year}</p>
            </div>
          </div>
        ))}
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
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <p className="font-bold">Post By: </p>
                  <p>{item.name}</p>
                  <p>{item.department}</p>
                  <p>{item.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPostsComponent;
