import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks}) => {
    const [blogs, setBlogs] = useState([]);

useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setBlogs(data))

},[])

    return (
        <div className="md:w-2/3">
            <h3 className=" text-3xl font-semibold my-6 text-center">My blog: {blogs.length}</h3>
            {
              blogs.map(blog => <Blog 
                key={blog.id} 
                blog={blog}
                handleAddToBookmarks={handleAddToBookmarks}></Blog>)  
            }
        </div>
    );
};

Blogs.propTypes={
    // handleAddToBookmarks: PropTypes.function.isRequired,
}

export default Blogs;