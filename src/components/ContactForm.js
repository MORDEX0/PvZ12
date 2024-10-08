import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';

function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Your Name" required />
      <input {...register('email')} placeholder="Your Email" required />
      <textarea {...register('message')} placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;

