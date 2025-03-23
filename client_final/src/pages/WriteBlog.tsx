import React from 'react';
import BlogEditor from '../components/editor/BlogEditor';

const WriteBlog = () => {
  return (
    <div className="pt-3"> {/* Add padding top to account for fixed navbar */}
      <BlogEditor />
    </div>
  );
};

export default WriteBlog; 