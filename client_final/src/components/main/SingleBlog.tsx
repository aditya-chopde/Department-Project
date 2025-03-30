import API from "@/lib/baseUrl";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const SingleBlog = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const [data, setData] = useState<any>(null);

  const getSingleBlogData = async () => {
    await API.get(`/user/get-single-blog-data/${blogId}`).then((res) => {
      setData(res.data.post);
      console.log(res.data.post);
    });
  };

  useEffect(() => {
    getSingleBlogData();
  }, []);

  return (
    <div className="w-[75%] mx-auto p-4 my-28">
      {data ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
          <div className="mt-4 text-sm text-gray-500">
            <div className="flex flex-row gap-3 my-5">
              <motion.img
                src="https://github.com/shadcn.png"
                alt="avatar-image"
                className="w-5 rounded-full"
                whileHover={{ scale: 1.1 }}
              />
              <p>
                {data.name} | {data.year}
              </p>
            </div>
          </div>
          <hr />
          <div
            className="prose my-5"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </>
      ) : (
        <p className="text-center text-lg">Loading...</p>
      )}
    </div>
  );
};

export default SingleBlog;
