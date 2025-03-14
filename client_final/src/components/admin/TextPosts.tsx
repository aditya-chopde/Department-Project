import API from "@/lib/baseUrl";
import { useEffect, useState } from "react";

interface text{
    name: string,
    year:string,
    department:string,
    description:string,
    status:string,
    title: string,
    _id: string,
}

const TextPosts = () => {
    const [dataText, setDataText] = useState([])

  const getTextPostsRequests = async () => {
    await API.get("/admin/get-text-data")
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
  }, [])
  

  return (
    <div className="mx-10 my-5">
      <div>
        <h1 className="font-bold text-2xl">Recent Text Posts Requests</h1>
      </div>
      <div className="flex flex-row flex-wrap gap-3 my-3">
        {dataText.map((text: text) => (
          <div
            key={text._id}
            className="border rounded-md p-4 my-3 border-black lg:w-[28%] md:w[35%] flex flex-col justify-between"
          >
            <div>
              <p>
                <strong>Title:</strong> {text.title}
              </p>
              <p>
                <strong>Content:</strong> <br /> {text.description}
              </p>
              <p className="mt-2">
                <strong>Post By:</strong> <br />{text.name} <br />{text.year}
              </p>
            </div>
            <div className="my-3">
              {text.status === "Pending" ? (
                <div className="flex lg:flex-row flex-col gap-3">
                  <button className="bg-green-500 text-white px-3 py-2 rounded-sm cursor-pointer hover:-translate-y-1 transition-all">
                    Approve
                  </button>
                  <button className="bg-red-500 text-white px-3 py-2 rounded-sm cursor-pointer hover:-translate-y-1 transition-all">
                    Reject
                  </button>
                </div>
              ) : (
                <button
                  className={` ${
                    text.status === "Approved"
                      ? "bg-green-500 text-white px-3 py-2 rounded-sm cursor-pointer "
                      : "bg-red-500 text-white px-3 py-2 rounded-sm cursor-pointer "
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

export default TextPosts;
