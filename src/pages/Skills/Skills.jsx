import React from 'react'
import './Skills.scss'
import { useRef } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
const Skills = () => {
  return (
    //  <!-- ======= Skills Section ======= -->
    <section id='skills' class='skills section-bg'>
      <div class='container'>
        <div class='section-title'>
          <h2>Skills </h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class='row skills-content'>
          <div class='col-lg-6' data-aos='fade-up'>
            <div class='progress'>
              <span class='skill'>
                HTML <i class='val'>100%</i>
              </span>
              <div class='progress-bar-wrap bg-info'>
                {/* <div
                  class='progress-bar'
                  role='progressbar'
                  aria-valuenow='100'
                  aria-valuemin='10'
                  aria-valuemax='100'
                ></div> */}
                {
                  <ProgressBar
                    completed={60}
                    className='skill'
                    ariaValuemax='100'
                    height='10px'
                    borderRadius='0'
                    ariaValuemin='0'
                    labelClassName='progress'
                    labelAlignment='left'
                    bgColor='lightsteelblue'
                    baseBgColor='#212431'
                  />
                }
              </div>
            </div>

            <div class='progress'>
              <span class='skill'>
                CSS <i class='val'>90%</i>
              </span>
              <div class='progress-bar-wrap'>
                <ProgressBar
                  completed={60}
                  className='skill'
                  ariaValuemax='100'
                  height='10px'
                  borderRadius='0'
                  ariaValuemin='0'
                  labelClassName='progress'
                  labelAlignment='left'
                  bgColor='lightsteelblue'
                  baseBgColor='#212431'
                />
              </div>
            </div>

            <div class='progress'>
              <span class='skill'>
                JavaScript <i class='val'>75%</i>
              </span>
              <div class='progress-bar-wrap'>
                <ProgressBar
                  completed={60}
                  className='skill'
                  ariaValuemax='100'
                  height='10px'
                  borderRadius='0'
                  ariaValuemin='0'
                  labelClassName='progress'
                  labelAlignment='left'
                  bgColor='lightsteelblue'
                  baseBgColor='#212431'
                />
              </div>
            </div>
          </div>

          <div class='col-lg-6' data-aos='fade-up' data-aos-delay='100'>
            <div class='progress'>
              <span class='skill'>
                PHP <i class='val'>80%</i>
              </span>
              <div class='progress-bar-wrap'>
                <ProgressBar
                  completed={60}
                  className='skill'
                  ariaValuemax='100'
                  height='10px'
                  borderRadius='0'
                  ariaValuemin='0'
                  labelClassName='progress'
                  labelAlignment='left'
                  bgColor='lightsteelblue'
                  baseBgColor='#212431'
                />
              </div>
            </div>

            <div class='progress'>
              <span class='skill'>
                WordPress/CMS <i class='val'>90%</i>
              </span>
              <div class='progress-bar-wrap'>
                <ProgressBar
                  completed={60}
                  className='skill'
                  ariaValuemax='100'
                  height='10px'
                  borderRadius='0'
                  ariaValuemin='0'
                  labelClassName='progress'
                  labelAlignment='left'
                  bgColor='lightsteelblue'
                  baseBgColor='#212431'
                />
              </div>
            </div>

            <div class='progress'>
              <span class='skill'>
                Photoshop <i class='val'>55%</i>
              </span>
              <div class='progress-bar-wrap'>
                <ProgressBar
                  completed={60}
                  className='skill'
                  ariaValuemax='100'
                  height='10px'
                  borderRadius='0'
                  ariaValuemin='0'
                  labelClassName='progress'
                  labelAlignment='left'
                  bgColor='lightsteelblue'
                  baseBgColor='#212431'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- End Skills Section-- >
  )
}

export default Skills
