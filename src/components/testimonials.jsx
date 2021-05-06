import React from 'react'
import { Contact } from './contact'

export class Testimonials extends React.Component {
  render(){
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>What our clients say</h2>
        </div>
        <div className='row'>
                <div className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>

                      <img src="img/testimonials/conner.jpeg" alt='conner' />
                    </div>
                    <div className='testimonial-content'>
                      <p>"My little girls adored and loved the cake."</p>
                      <div className='testimonial-meta'> - Conner Giovenco </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>

                      <img src="img/testimonials/conner.jpeg" alt='conner' />
                    </div>
                    <div className='testimonial-content'>
                      <p>"My little girls adored and loved the cake."</p>
                      <div className='testimonial-meta'> - Conner Giovenco </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>

                      <img src="img/testimonials/conner.jpeg" alt='conner' />
                    </div>
                    <div className='testimonial-content'>
                      <p>"My little girls adored and loved the cake."</p>
                      <div className='testimonial-meta'> - Conner Giovenco </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>

                      <img src="img/testimonials/conner.jpeg" alt='conner' />
                    </div>
                    <div className='testimonial-content'>
                      <p>"My little girls adored and loved the cake."</p>
                      <div className='testimonial-meta'> - Conner Giovenco </div>
                    </div>
                  </div>
                </div>
        </div>
      </div>
            <Contact></Contact>
    </div>
  )
}
}
