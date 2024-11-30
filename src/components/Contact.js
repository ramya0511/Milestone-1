import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Have questions or need assistance? We're here to help! 
        <br/>Reach out to us
        via the form below or use the contact details provided.
      </p>
      <br/>
      <h2>Contact Information</h2>
      <p>
        Phone: +91 123 456 7890  
        <br />
        <br/>
        Email: contact@foodwebsite.com  
        <br />
        <br/>
        Address: Mangalore, Karnataka, India-575003
      </p>
      <br/>
      <h2>Send Us a Message</h2>
      <form>
        <label>
          Name:
          <input type="text" placeholder="Your Name" />
        </label>
        <br />
        <br/>
        <label>
          Email:
          <input type="email" placeholder="Your Email" />
        </label>
        <br />
        <br/>
        <label>
          Message:
          <textarea placeholder="Your Message"></textarea>
        </label>
        <br />
        <br/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
