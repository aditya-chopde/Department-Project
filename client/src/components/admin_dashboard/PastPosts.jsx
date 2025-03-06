import React, { useEffect, useState } from "react";
import axios from "axios";

const PastPosts = () => {
  const [dataText, setDataText] = useState([]);
  const [dataImage, setDataImage] = useState([]);

  async function getImageData() {
    try {
      await axios
        .get(`http://localhost:3000/api/admin/get-image-data`)
        .then((res) => {
          setDataImage(res.data.data);
          console.log(res);
        });
    } catch (error) {
      alert("An Error Ocurred: " + error.message);
    }
  }

  async function getTextData() {
    try {
      await axios
        .get(`http://localhost:3000/api/admin/get-text-data`)
        .then((res) => {
          setDataText(res.data.data);
          console.log(res);
        });
    } catch (error) {
      alert("An Error Ocurred: " + error.message);
    }
  }

  useEffect(() => {
    getTextData();
    getImageData();
  }, []);

  return (
    <div className="w-[750px] mx-auto">
      <div>
        <h1 className="font-bold text-2xl">Text Posts</h1>
        <div className="my-5">
          {dataText.map((item) => (
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
              <div>
                <button className="btn">{item.status}</button>
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
                <div>
                  <button className="btn">{item.status}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastPosts;
