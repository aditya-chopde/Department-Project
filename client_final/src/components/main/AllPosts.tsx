import API from "@/lib/baseUrl";
import React, { useEffect, useState } from "react";

interface TextPosts {
  _id: string;
  title: string;
  description: string;
}

interface ImagePosts {
  _id: string;
  title: string;
  description: string;
}

const AllPosts = () => {
  const [textData, setTextData] = useState([]);
  const [imageData, setImageData] = useState([]);

  const [final, setFinal] = useState([]);

  const getTextPosts = async () => {
    API.get("/admin/get-text-data").then((res) => {
      const fetchedTextData = res.data.data;
      const filteredTextPosts = fetchedTextData.filter(
        (item) => item.status === "Approved"
      );
      setTextData(filteredTextPosts.reverse());
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

  useEffect(() => {
    // Combine both arrays and add a type identifier
    const combinedArray = [
      ...textData.map((item: TextPosts) => ({ ...item, type: "text" })),
      ...imageData.map((item: ImagePosts) => ({ ...item, type: "image" })),
    ];

    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array: ImagePosts[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    // Set the shuffled array to final state
    setFinal(shuffleArray(combinedArray) as any);
  }, [textData, imageData]);

  return (
    <div className="w-[85%] mx-auto my-5">
      <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 p-4">
        {final.map((post: any, index: number) => (
          <div
            key={index}
            className="bg-black rounded-lg shadow-md overflow-hidden my-3"
          >
            {post.type === "image" && (
              <div className="p-3">
                <img
                  src={post.path}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-sm"
                />
                <div className="p-3">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <div className="flex flex-row gap-3">
                      <img
                        src="https://github.com/shadcn.png"
                        alt="avthar-image"
                        className="w-5 rounded-full"
                      />
                      <p>
                        {post.name} | {post.department}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {post.type === "text" && (
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-300">{post.description}</p>
                <div className="mt-4 text-sm text-gray-500">
                  <div className="flex flex-row gap-3">
                    <img
                      src="https://github.com/shadcn.png"
                      alt="avthar-image"
                      className="w-5 rounded-full"
                    />
                    <p>
                      {post.name} | {post.department}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
