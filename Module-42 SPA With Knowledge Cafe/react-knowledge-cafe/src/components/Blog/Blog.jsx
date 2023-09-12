import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    console.log(blog);
    const {cover} = blog;
    return (
        <div>
            <h1 className="w-[800px] h-[400px]"><img src={cover} alt="" /></h1>
        </div>
    );
};



Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;