import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const Contactpage = ({ cartItems }) => {
  // Contactpage consists of different smaller components I made so we can reuse them later when needed and sending different components necessary props to use them in there
  return (
    <>
      <Header cartItems={cartItems} />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contactpage;
