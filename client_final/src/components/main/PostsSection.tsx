import API from "@/lib/baseUrl";
import React, { useEffect, useState } from "react";

const PostsSection = () => {
  const [textData, setTextData] = useState([]);
  const [imageData, setImageData] = useState([]);

  const getTextPosts = async () => {
    API.get("/admin/get-text-data").then((res) => {
      const fetchedTextData = res.data.data;
      const filteredTextPosts = fetchedTextData.filter(
        (item) => item.status === "Approved"
      );
      setTextData(filteredTextPosts.reverse().slice(0, 3));
    });
  };

  const getImagePosts = async () => {
    API.get("/admin/get-image-data").then((res) => {
      const fetchedImageData = res.data.data;
      const filteredImagePosts = fetchedImageData.filter(
        (item) => item.status === "Approved"
      );
      setImageData(filteredImagePosts.reverse());
    });
  };

  useEffect(() => {
    getTextPosts();
    getImagePosts();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center">Posts</h1>
      </div>
      <div>
        <div className="w-[75%] mx-auto my-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {textData.map((post: any, index: number) => (
              <div key={index} className="bg-black rounded-lg shadow-md p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <div className="flex flex-row gap-3 items-center">
                    <img
                      src="https://github.com/shadcn.png"
                      alt="avatar-image"
                      className="w-5 rounded-full"
                    />
                    <p>
                      {post.name} | {post.department}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {imageData.map((post: any, index: number) => (
              <div key={index} className="bg-black rounded-lg shadow-md p-4 flex flex-col justify-between">
                <div>
                  <img
                    src={post.path}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-sm mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <div className="flex flex-row gap-3 items-center">
                    <img
                      src="https://github.com/shadcn.png"
                      alt="avatar-image" 
                      className="w-5 rounded-full"
                    />
                    <p>
                      {post.name} | {post.department}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
