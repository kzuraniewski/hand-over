import CTA from '../components/home/CTA';
import About from '../components/home/About';
import Contact from '../components/home/Contact';
import ThreeCols from '../components/home/ThreeCols';
import Helping from '../components/home/Helping';
import Steps from '../components/home/Steps';

export default function Home() {
	return (
		<>
			<CTA />
			<ThreeCols />
			<Steps />
			<About />
			<Helping />
			<Contact />
		</>
	);
}
