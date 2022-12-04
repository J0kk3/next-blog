//next
import Head from "next/head";
//lib
import { getFeaturedPosts } from "../lib/posts-util";
//components
import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/Featured-posts';

const HomePage = props =>
{
    return (
        <>
            <Head>
                <title>Jockes Blog</title>
                <meta name="description" content="I post about nothing at all" />
            </Head>
            <Hero />
            <FeaturedPosts posts={ props.posts } />
        </>
    );
};

export const getStaticProps = () =>
{
    const featuredPosts = getFeaturedPosts();

    return (
        {
            props:
            {
                posts: featuredPosts,
            }
        } );
};

export default HomePage;