//components
import AllPosts from "../../components/posts/All-posts";

const DUMMY_POSTS =
    [
        {
            slug: "getting-started-with-nextjs",
            title: "Getting Started with Next.js",
            image: "getting-started-nextjs.png",
            excerpt: "Next.JS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
            date: "04-12-2022"
        },
        {
            slug: "getting-started-with-nextjs2",
            title: "Getting Started with Next.js",
            image: "getting-started-nextjs.png",
            excerpt: "Next.JS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
            date: "04-12-2022"
        },
        {
            slug: "getting-started-with-nextjs3",
            title: "Getting Started with Next.js",
            image: "getting-started-nextjs.png",
            excerpt: "Next.JS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
            date: "04-12-2022"
        },
        {
            slug: "getting-started-with-nextjs4",
            title: "Getting Started with Next.js",
            image: "getting-started-nextjs.png",
            excerpt: "Next.JS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
            date: "04-12-2022"
        },
    ];

const AllPostsPage = () =>
{
    return (
        <AllPosts posts={ DUMMY_POSTS } />
    );
};

export default AllPostsPage;