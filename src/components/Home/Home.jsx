import Data from './Data';
import ScrollDown from './ScrollDown';
import Social from './Social';
import './home.css'


const Home = () => {
    return (
        <section className="home section" id="home">
            <div className='home__container w-[400px] md:w-auto container cgrid'>
                <div className='home__content  cgrid'>
                    <Social></Social>
                    <div className=" home__img"></div>
                    <Data></Data>
                </div>

                <ScrollDown></ScrollDown>
            </div>
        </section>
    );
};

export default Home;