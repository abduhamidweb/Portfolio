import React from 'react'
import './contact.scss'
const Contact = () => {
  return (
    <>
      <section className='contact'>
        <div className='container'>
          <div className='row'>
            <div className='mx-auto col-8'>
              <div className='content'>
                <h2 id='get-in-touch'>Get in touch</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo
                </p>
                <h3 id='location'>Location</h3>
                <p>Toshkent Uzbekiston</p>
                <h3 id='phone'>Phone</h3>
                <p>
                  <a href='tel://+998997867075'>+998997867075</a>
                </p>
              </div>
              <div className='mt-3 pt-3'>
                <h3 className='contactme'>Contact Me</h3>
                <form className='contact-form mt-6' action='#'>
                  <div className='row mb-6 mediaInput'>
                    <div className='col-6'>
                      <label className='mb-2 block' for='name'>
                        Name
                      </label>
                      <input
                        className='form-input w-full'
                        name='name'
                        type='text'
                        placeholder='Alex Smith'
                        required=''
                      />
                    </div>
                    <div className='mt-6 mt-0 col-6 mediaInput2'>
                      <label className='mb-2 block' for='email'>
                        Email
                      </label>
                      <input
                        className='form-input w-full'
                        name='email'
                        type='email'
                        placeholder='hello@gmail.com'
                        required=''
                      />
                    </div>
                  </div>
                  <div className='mb-6'>
                    <label className='mb-2 block' for='subject'>
                      Subject
                    </label>
                    <input
                      className='form-input w-full'
                      name='subject'
                      type='text'
                      placeholder='Reasons for contact'
                      required=''
                    />
                  </div>
                  <div className='mb-6'>
                    <label className='mb-2 block' htmlFor='message'>
                      Message
                    </label>
                    <textarea
                      className='form-textarea w-full'
                      rows='6'
                      placeholder='Your message'
                    ></textarea>
                  </div>
                  <button className='btn mb-6'>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
