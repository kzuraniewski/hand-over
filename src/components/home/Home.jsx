import TopSection from './TopSection';
import About from './About';
import Contact from './Contact';
import Data from './Data';
import Footer from './Footer';
import Helping from './Helping';
import Steps from './Steps';

export default function Home() {
    return (
        <>
            <TopSection />
            <Data />
            <About />
            <Steps />
            <Helping />
            <Contact />
            <Footer />
        </>
    );
}
