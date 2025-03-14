import API from "@/lib/baseUrl";
import { useEffect, useState } from "react";

interface text {
  name: string;
  year: string;
  department: string;
  path: string;
  status: string;
  title: string;
  _id: string;
}

const ImagePosts = () => {
  const [dataText, setDataText] = useState([]);

  const getTextPostsRequests = async () => {
    await API.get("/admin/get-image-data")
      .then((response) => {
        const usersData = response.data.data;
        setDataText(usersData.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTextPostsRequests();
  }, []);

  return (
    <div className="mx-auto my-5 w-[90%]">
      <div>
        <h1 className="font-bold text-2xl">Recent Text Posts Requests</h1>
      </div>
      <div className="flex flex-row flex-wrap gap-3 my-3">
        {dataText.map((text: text) => (
          <div
            key={text._id}
            className="border rounded-md p-4 my-3 border-black lg:w-[30%] md:w[35%] w-[55%] flex flex-col justify-between"
          >
            <div>
              <p>
                <div className="w-full h-52 bg-gray-300">
                  <img src={text.path} alt="" className="rounded-md w-full h-full object-cover"/>
                </div>
              <h1 className="text-lg mt-3">
                <strong>{text.title}</strong> 
              </h1>
              </p>
              <p className="mt-2">
                <strong>Post By:</strong> <br />
                {text.name} <br />
                {text.year}
              </p>
            </div>
            <div className="my-3">
              {text.status === "Pending" ? (
                <div className="flex lg:flex-row flex-col gap-3">
                  <button className="bg-green-500 text-white px-3 py-2 rounded-sm cursor-pointer hover:-translate-y-1 transition-all w-full">
                    Approve
                  </button>
                  <button className="bg-red-500 text-white px-3 py-2 rounded-sm cursor-pointer hover:-translate-y-1 transition-all w-full">
                    Reject
                  </button>
                </div>
              ) : (
                <button
                  className={` ${
                    text.status === "Approved"
                      ? "bg-green-500 text-white px-3 py-2 rounded-sm cursor-pointer w-full"
                      : "bg-red-500 text-white px-3 py-2 rounded-sm cursor-pointer w-full"
                  }`}
                >
                  {text.status}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagePosts;
