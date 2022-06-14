import React from 'react'
import emailjs from 'emailjs-com';
import styles from '../../modules/ContactUs.module.css'

const ContactUs = () => {
    function sendEmail(e) {
        e.preventDefault();    //IMPORTANT 

        emailjs.sendForm('service_jinn13', 'template_h38nl8b', e.target, 'bNIuS-ec5uOLsDemM')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text); 
            });
    }
    return (
        <div className={styles.contact_container}>
            <form className={styles.contact_form} onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name:</label>
                <input type="text" name="from_name" />
                <label>Email:</label>
                <input type="email" name="from_email" />
                <label>Subject:</label>
                <input type="text" name="subject" />
                <label>Message:</label>
                <textarea name="html_message" />
                <button onClick={() => alert("Thanks For Contacting Gym Bois!")}>Send</button>
            </form>
        </div>
    )
}

export default ContactUs