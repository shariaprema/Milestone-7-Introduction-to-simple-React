/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (

        <>
        

        <div className="md:w-1/3 bg-gray-300 ml-4 mt-4">
            
            <div className='text-center bg-orange-500 text-2xl font-medium'>
            <h2 >Spent time on read : {readingTime}min</h2>
            </div>

            <h3 className="text-2xl text-center font-medium">Bookmarked Blogs:{bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark
                     key={bookmark.id} 
                     bookmark={bookmark}
                     readingTime={readingTime} ></Bookmark>)
            }
        </div>
        
        
        </>
    );
};

Bookmarks.PropTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmarks;