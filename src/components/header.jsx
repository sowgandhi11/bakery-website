import React from 'react'


export class Header extends React.Component{
    render(){
  return (

    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  Welcome to TT’s Creative Confections
                  <span></span>
                </h1>

                <a
                  href='#contact'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
  }
}
