import React from 'react'

const Contact = () => {
  return (
    <>
      <section className='contact'>
        <section class='section pt-[72px]'>
          <div class='container'>
            <div class='row'>
              <div class='mx-auto lg:col-8'>
                <div class='content'>
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
                  <p>+88544767456</p>
                </div>
                <div class='mt-12 pt-12'>
                  <h3 class='h5 font-normal text-3xl'>Contact Me</h3>
                  <form class='contact-form mt-6' action='#'>
                    <div class='row mb-6'>
                      <div class='md:col-6'>
                        <label class='mb-2 block' for='name'>
                          Name
                        </label>
                        <input
                          class='form-input w-full'
                          name='name'
                          type='text'
                          placeholder='Alex Smith'
                          required=''
                        />
                      </div>
                      <div class='mt-6 md:mt-0 md:col-6'>
                        <label class='mb-2 block' for='email'>
                          Email
                        </label>
                        <input
                          class='form-input w-full'
                          name='email'
                          type='email'
                          placeholder='hello@gmail.com'
                          required=''
                        />
                      </div>
                    </div>
                    <div class='mb-6'>
                      <label class='mb-2 block' for='subject'>
                        Subject
                      </label>
                      <input
                        class='form-input w-full'
                        name='subject'
                        type='text'
                        placeholder='Reasons for contact'
                        required=''
                      />
                    </div>
                    <div class='mb-6'>
                      <label class='mb-2 block' for='message'>
                        Message
                      </label>
                      <textarea
                        class='form-textarea w-full'
                        rows='6'
                        placeholder='Your message'
                      ></textarea>
                    </div>
                    <button class='btn btn-primary rounded text-sm'>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Contact
