import Home from '~/components/Home';
import About from '~/components/About';
import Skills from '~/components/Skills';
import Certificates from '~/components/Certificates';
import Projects from '~/components/Projects';
import Contact from '~/components/Contact';

function Singlepage() {
    return ( 
        <>
            <Home />
            <About />
            <Skills />
            <Certificates />
            <Projects />
            <Contact />
        </>
    );
}

export default Singlepage;