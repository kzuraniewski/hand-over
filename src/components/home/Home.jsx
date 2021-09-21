import About from './About';
import Contact from './Contact';
import CTA from './CTA';
import Data from './Data';
import Footer from './Footer';
import Header from './Header';
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
