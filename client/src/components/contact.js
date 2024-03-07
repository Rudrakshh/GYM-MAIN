import React,  { useRef } from 'react';
import emailjs from '@emailjs/browser'

function Contact(){
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tk7uoup', 'template_hnhc2wm', form.current, 'D3Ksuz1i0vPlV3kZW')
          .then((result) => {
              console.log(result.text);
              alert("YOUR EMAIL HAS BEEN SENT");
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="FULL NAME" name='useremail' required /> 
                <input type="EMAIL" placeholder="EMAIL" name='username' required /> 
                <textarea placeholder='TYPE HERE.......' name='userfeed' required />
                <input type="submit" value="send" />
"
            </form>
        </div>
    )
}

export default Contact;













