//components
import PostItem from "./Post-item";
//styles
import classes from "./Posts-grid.module.css";

const PostsGrid = props =>
{
    const { posts } = props;

    return (
        <ul className={ classes.grid }>
            { posts.map( post => (
                <PostItem key={ post.slug } post={ post } />
            ) ) }
        </ul>
    );
};

export default PostsGrid;