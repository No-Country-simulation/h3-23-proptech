
import Navbar from '../../components/Navbar';
import CardsSection from './CardSection';
import Conectando from './Conectando';
import ContactForm from './ContactForm';
import Financia from './Financia';
import Footer from './Footer';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import StepsSection from './StepsSection';
import Testimonials from './Testimonials';
import Valores from './valores';

const Landing = () => {
    return (
        <>
            <Navbar />
            <Conectando />
            <CardsSection />
            <Valores />
            <Financia />
            <StepsSection />
            <Testimonials />
            <ContactForm />
            <PreguntasFrecuentes />
            <Footer />
            
            
        </>
    );
}

export default Landing;
