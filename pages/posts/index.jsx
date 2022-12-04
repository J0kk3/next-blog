//next
import Head from 'next/head';
//components
import AllPosts from "../../components/posts/All-posts";
//lib
import { getAllPosts } from "./posts-util";

const AllPostsPage = props =>
{
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="A list of programming-related tutorials and posts!" />
            </Head>
            <AllPosts posts={ props.posts } />
        </>
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