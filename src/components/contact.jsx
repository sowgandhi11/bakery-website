import { useState } from 'react'
import emailjs from 'emailjs-com'

import React from 'react'

export class Contact extends React.Component {
render() {
  return (
    <div>
      <div id='contact'>
        <div className='container'>

          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>

            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                +1 224 715 2833
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                tturton0622@gmail.com
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href="https://www.instagram.com/tts_creative_confections/">
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/tts_creative_confections/">
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
        <div>
          <img src="img/flowers.png" height="300px" width="700px"/>
        </div>
        </div>
      </div>
    </div>
  )
  }
}
