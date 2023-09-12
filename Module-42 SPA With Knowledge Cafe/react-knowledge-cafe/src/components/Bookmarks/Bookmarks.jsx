import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-4">
            <h3 className="text 3xl text-center">Bookmarked Blogs:{bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.PropTypes = {
    Bookmarks: PropTypes.array
}

export default Bookmarks;