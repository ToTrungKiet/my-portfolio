import Home from '~/components/Home';
import About from '~/components/About';
import Skills from '~/components/Skills';
import Certificates from '~/components/Certificates';

function Singlepage() {
    return ( 
        <>
            <Home />
            <About />
            <Skills />
            <Certificates />
        </>
    );
}

export default Singlepage;