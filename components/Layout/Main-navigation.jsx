//next
import Link from "next/link";
//components
import Logo from "./Logo";
//styles
import classes from "./Main-navigation.module.css";

const MainNavigation = () =>
{
    return (
        <header className={ classes.header }>
            <Link href="/">
                <Logo />
            </Link>
            <nav>
                <ul>
                    <li><Link href="/posts">Posts</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;