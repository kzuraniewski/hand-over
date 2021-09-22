import Header from './Header';
import CTA from './CTA';
import About from './About';
import Contact from './Contact';
import Data from './Data';
import Footer from './Footer';
import Helping from './Helping';
import Steps from './Steps';

export default function Home() {
    return (
        <>
            <Header />
            <CTA />
            <Data />
            <About />
            <Steps />
            <Helping />
            <Contact />
            <Footer />
        </>
    );
}
