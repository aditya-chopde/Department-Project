import React from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
  return (
    <div className='text-center my-10'>
        <div className='flex flex-row gap-3 justify-center items-center my-5'>
            <button className='btn btn-primary my-2'><Link to="/dashboard/add-post">Add Post</Link></button>
            <button className='btn btn-primary my-2'><Link to="/dashboard/add-image">Add Image</Link></button>
        </div>
      No current Posts
    </div>
  )
}

export default Posts
