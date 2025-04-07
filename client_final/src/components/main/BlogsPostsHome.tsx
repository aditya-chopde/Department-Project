import API from '@/lib/baseUrl'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BlogsPostsHome = () => {
    const [data, setData] = useState([])

    const getApprovedBlogsData = async () =>{
        API.get("/user/get-approved-blogs").then((res)=>{
            const fetchedData = (res.data.posts).reverse();
            setData(fetchedData);
        }).catch((error)=>{
          alert("Error Ocurrend: " + error.message);
        })
    }

    useEffect(() => {
      getApprovedBlogsData()
    }, [])
    
    const stripHtml = (html: string, wordLimit = 20) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const text = doc.body.textContent || "";
      const words = text.split(" ").filter((word) => word !== ""); // Remove extra spaces
  
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + " ...";
      }
      return text;
    }

  return (
    <div className='w-[75%] mx-auto my-28'>
      <div className="my-5 flex flex-row gap-3 flex-wrap">
        {data.map(
          (item: {
            _id: string;
            title: string;
            content: string;
            status: string;
          }) => (
            <div
              key={item._id}
              className="border-2 rounded-sm border-md p-5 flex flex-row gap-5 justify-between w-full"
            >
              <div>
                <Link to={`/view/${item._id}`}>
                <h1 className="font-bold text-xl">{item.title}</h1>
                <p>{stripHtml(item.content, 35)}</p>
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default BlogsPostsHome;
