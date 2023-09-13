import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({  blog, handleAddToBookmarks, handleMarksAsRead}) => {
    // console.log(blog);
    // console.log('hello', handleAddToBookmarks);
    const {id, author_img, author, reading_time, posted_data, cover, title, hashtags} = blog;
    
    
    return (
        <div className='mb-20 space-y-4'>
            <img className="w-full" src={cover} alt= {`Cover picture of the title ${title}`} />

            {/* profile part */}
            <div className='flex justify-between'>

                <div className='flex '>
                    <img className="w-[60px] h-[60px]" src={author_img} alt={`Profile picture of the author ${author_img}`} />
                   
                    <div className=' ml-4'> 
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <h2 className='text-sm font-semibold text-[#11111199]'>{posted_data}</h2>
                    </div>

                </div>

                <div className=' flex  font-medium text-sm text-[#11111199]'>
                <h2>{reading_time}min read</h2>
                <button onClick={()=>handleAddToBookmarks(blog)} className='ml-2 text-xl mb-9'> <FaBookmark></FaBookmark> </button>
                </div>

            </div>

            <h1 className='text-4xl font-bold'> {title} </h1>
            <p>
            {
                hashtags.map((hash,idx) => <span className='text-sm font-medium text-[#11111199] ' key={idx}><a href="">{hash}</a></span>)
            }
            </p>
            
            <button onClick={()=>handleMarksAsRead(id,reading_time)} className='text-purple-600 text font-bold underline'>Marks as read</button>


        </div>
    );
};



Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarksAsRead: PropTypes.func,

}

export default Blog;