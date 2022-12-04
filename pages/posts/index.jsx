//components
import AllPosts from "../../components/posts/All-posts";
//lib
import { getAllPosts } from "./posts-util";

const AllPostsPage = props =>
{
    return (
        <AllPosts posts={ props.posts } />
    );
};

export const getStaticProps = () =>
{
    const allPosts = getAllPosts();
    return (
        {
            props:
            {
                posts: allPosts,
            }
        } );
};

export default AllPostsPage;