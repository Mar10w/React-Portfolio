import React from 'react';

const Contact = () => (
  <section>
    <h2>Contact</h2>
    <form>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Message:
        <textarea name="message" required></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default Contact;