import Header from './Header';
import CTA from './CTA';
import About from './About';
import Contact from './Contact';
import ThreeCols from './ThreeCols';
import Footer from './Footer';
import Helping from './Helping';
import Steps from './Steps';

export default function Home() {
    return (
        <>
            <Header />
            <CTA />
            <ThreeCols />
            <About />
            <Steps />
            <Helping />
            <Contact />
            <Footer />
        </>
    );
}
