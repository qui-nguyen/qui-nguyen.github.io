import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import styles from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import Modal from './Modal';
import Recaptcha from './ReCaptcha';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [messageName, setMessageName] = useState(null);


  const [tokenRecaptcha, setTokenRecaptcha] = useState(null);
  const [resetRecaptcha, setResetRecaptcha] = useState(false);

  const handlerCheckRecaptcha = (token) => {
    if (token) {
      setTokenRecaptcha(token);
    };
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tokenRecaptcha);
    if (tokenRecaptcha) {
      setLoading(true);

      if (import.meta.env.VITE_APP_EMAILJS_SERVICE_ID && import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID && import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY) {
        emailjs
          .send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
              from_name: form.name,
              to_name: 'Thanh Qui',
              from_email: form.email,
              message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
          )
          .then(
            () => {
              setLoading(false);
              setSuccess(true);
              setMessageName('success');

              setTimeout(() => {
                setSuccess(null);
              }, 3000);

              setResetRecaptcha(true);
              setTokenRecaptcha(null);

              setForm({
                name: '',
                email: '',
                message: '',
              });
            },
            (error) => {
              setLoading(false);
              setSuccess(false);
              setMessageName('error');

              console.error('error : ', error);
            }
          );
      }
      else {
        setLoading(false);
        setSuccess(false);
        setMessageName('error');
      }
    } else {
      setSuccess(false);
      setMessageName('recaptcha');
    }
  };

  const closeModal = () => {
    setSuccess(null);
    setMessageName(null);
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative`}
    >
      {success !== null &&
        <motion.div
          variants={slideIn('top', 'tween', 0.2, 1)}
          className='absolute xl:flex-1 xl:h-auto md:h-[550px] h-[350px] top-[120px]'
        >
          <Modal isVisible={true} success={success} messageName={messageName} closeModal={closeModal} />
        </motion.div>}

      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>On discute ?</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre nome</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Quel est votre nom ?'
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Quel est votre email ?'
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Bonjour, ...'
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <Recaptcha
            reset={resetRecaptcha}
            handlerCheckRecaptcha={handlerCheckRecaptcha}
          />

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />

      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');