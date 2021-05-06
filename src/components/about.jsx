import React from 'react'


export class About extends React.Component {
  render(){
    return(
      <div id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-6'>

              <img src='img/profile.jpg' className='img-responsive' alt='' />
            </div>
            <div className='col-xs-12 col-md-6'>
              <div className='about-text'>
                <h2>About The Baker</h2>
                <p>"TT’s Creative Confections is an in home bakery located in Palatine, IL. Tianna Turton is the self taught baker/decorator. Tianna started TT’s Creative Confections back in 2013 while she was in college at ISU. TT’s Creative Confections offers beautiful and creative customized cake, cupcakes, pie and pastry orders."</p>

                <div className='list-style'>
                  <h3>Follow us on Instagram</h3>
                  <a href="https://www.instagram.com/tts_creative_confections/">@tts_creative_confections</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    }
  }
