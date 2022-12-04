//next
import Image from 'next/image';
//packages
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
//components
import PostHeader from "./Post-header";
//style
import classes from './Post-content.module.css';

const PostContent = props =>
{
    const { post } = props;

    const imagePath = `/images/posts/${ post.slug }/${ post.image }`;

    const customRenderers =
    {
        // img ()
        // {
        //     return (
        //         <Image src={ `/images/posts/${ post.slug }/${ image.properties.src }` } alt={ image.alt } width={ 600 } height={ 300 } />
        //     );
        // },
        p ( paragraph )
        {
            const { node } = paragraph;

            if ( node.children[ 0 ].tagName === "img" )
            {
                const image = node.children[ 0 ];

                return (
                    <div className={ classes.image }>
                        <Image src={ `/images/posts/${ post.slug }/${ image.properties.src }` } alt={ image.alt } width={ 600 } height={ 300 } />
                    </div>
                );
            }

            return <p>{ paragraph.children }</p>;
        },

        code ( code )
        {
            const { className, children } = code;
            const language = className.split( "-" )[ 1 ]; // className is something like language-js => We need the "js" part here
            return (
                <SyntaxHighlighter style={ atomDark } language={ language } children={ children } />
            );
        }
    };

    return (
        <article className={ classes.content }>
            <PostHeader title={ post.title } image={ imagePath } />
            <ReactMarkdown components={ customRenderers }>{ post.content }</ReactMarkdown>
        </article>
    );
};

export default PostContent;