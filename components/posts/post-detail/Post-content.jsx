//packages
import ReactMarkdown from "react-markdown";
//components
import PostHeader from "./Post-header";
//style
import classes from './Post-content.module.css';

const DUMMY_POST =
{
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    date: "04-12-2022",
    content: "# This is a first post",
};

const PostContent = () =>
{
    const imagePath = `/images/posts/${ DUMMY_POST.slug }/${ DUMMY_POST.image }`;

    return (
        <article className={ classes.content }>
            <PostHeader title={ DUMMY_POST.title } image={ imagePath } />
            <ReactMarkdown>{ DUMMY_POST.content }</ReactMarkdown>
        </article>
    );
};

export default PostContent;