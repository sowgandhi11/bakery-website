import { useState } from 'react'
import emailjs from 'emailjs-com'

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                <a href="tel:12247152833">
                +1 224 715 2833
                </a>


            </div>
            <div className='contact-item'>

                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                <a href="mailto:tturton0622@gmail.com">
                tturton0622@gmail.com
                </a>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <h3>Menu</h3>
            <ul>
            <Link to="/">
              <li> <h4>Home</h4></li>
            </Link>
              <Link to="/Gallery">
                <li> <h4>Gallery</h4></li>
              </Link>

            </ul>
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
          <img src="img/flowers.png" height="100px" width="400px"/>
        </div>
        </div>
      </div>
    </div>
  )
  }
}
