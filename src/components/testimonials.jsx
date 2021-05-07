import React from 'react'
import { Contact } from './contact'
import { Navigation } from './navigation'

export class Testimonials extends React.Component {
  render(){
  return (


    <div id='testimonials'>
    <Navigation></Navigation>
    <header id='header'>

        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  What our friends say
                  <span></span>
                </h1>


              </div>
            </div>
          </div>
        </div>

    </header>


      <div className='container'>

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

                      <img src="img/testimonials/floral.jpeg" alt='conner' />
                    </div>
                    <div className='testimonial-content'>
                      <p>"The prettiest floral cakes I have ever seen!"</p>
                      <div className='testimonial-meta'> - Sowgandhi Bhattu </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>

                      <img src="img/testimonials/chloe.jpeg" alt='conner' />
                    </div>
                    <div className='testimonial-content'>
                      <p>"Thank you Tianna for making the most beautiful cake for Chloe's 6th birthday party today!"</p>
                      <div className='testimonial-meta'> - Elena Fantucchio </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>

                      <img src="img/testimonials/carousel.jpeg" alt='conner' />
                    </div>
                    <div className='testimonial-content'>
                      <p>"Thank you Tianna for trusting me with your cake topper. Your cake came out great! I particularly like the ruffles at the bottom you created."</p>
                      <div className='testimonial-meta'> - <a href= "www.instagram.com/smashingcaketoppers">@smashingcaketoppers</a> </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>

                      <img src="img/testimonials/rosella.jpeg" alt='conner' />
                    </div>
                    <div className='testimonial-content'>
                      <p>"Huge shout out to the amazing talent of Tianna Turton!! She has absolutely blown us away with the most beautiful cakes!"</p>
                      <div className='testimonial-meta'> - Rosella Clinton </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>

                      <img src="img/testimonials/canan.jpeg" alt='conner' />
                    </div>
                    <div className='testimonial-content'>
                      <p>"Special shot out to Tianna Turton for my amazing cake!! It was so beautiful and delicious!! Thank you!!"</p>
                      <div className='testimonial-meta'> - Canan Imbrogno </div>
                    </div>
                  </div>
                </div>

        </div>
            <div className='section-title text-center'>
              <h1>Call us today!</h1>
            </div>

      </div>



    <Contact></Contact>
    </div>

  )
}
}
