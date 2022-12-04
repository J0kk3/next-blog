//next
import Image from 'next/image';
//styles
import classes from './Hero.module.css';

const Hero = () =>
{
    return (
        <section className={ classes.hero }>
            <div className={ classes.image }>
                <Image src="/images/site/catinsuit.png" alt="An image showing a cat in a suit" width={ 300 } height={ 300 } />
            </div>
            <h1>PRESENTATION</h1>
            <p>PURPOSE</p>
        </section>
    );
};

export default Hero;