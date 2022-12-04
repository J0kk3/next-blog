//next
import Head from 'next/head';
//components
import ContactForm from "../components/contact/Contact-form";


const ContactPage = () =>
{
    return (
        <>
            <Head>
                <title>Contact Me</title>
                <meta name="description" content="Send me your messages" />
            </Head>
            <ContactForm />
        </>
    );
};

export default ContactPage;