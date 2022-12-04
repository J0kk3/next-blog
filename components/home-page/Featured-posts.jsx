//components
import PostsGrid from "../posts/Posts-grid";
//styles
import classes from "./Featured-posts.module.css";

const FeaturedPosts = props =>
{
    return (
        <section className={ classes.latest }>
            <h2>Featured Posts</h2>
            <PostsGrid posts={ props.post } />
        </section>
    );
};

export default FeaturedPosts;