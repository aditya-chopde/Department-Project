import Footer from '@/components/main/Footer';
import Navbar from '@/components/main/Navbar';
import SingleBlog from '@/components/main/SingleBlog';
import React from 'react'
import { useParams } from 'react-router-dom';

const SingleBlogView = () => {
    
  return (
    <div>
      <Navbar/>
      <SingleBlog/>
      <Footer/>
    </div>
  )
}

export default SingleBlogView
