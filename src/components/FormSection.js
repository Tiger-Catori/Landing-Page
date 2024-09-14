
import Form from './Form';
import ContactInfo from './ContactInfo';

const FormSection = () => {
    return (
        <section className='section__form section' id='contact'>
            <div className='container'>
                <ContactInfo />
                <Form />
            </div>
        </section>
    );
}

export default FormSection;
