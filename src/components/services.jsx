import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Services extends React.Component{
    render(){
  return (

    <div id='services' className='text-center'>



      <div className='container'>
        <div className='section-title'>
          <h2>Our Confections</h2>
          <p>
            These are some desserts we make! Please contact us for any inquiries.
          </p>
        </div>
        <div className='row'>

                <div className='col-md-4'>
                  <span>
                    <i className='fa fa-spoon'></i>
                  </span>{' '}
                  <h3>Cupcakes</h3>
                </div>
                <div className='col-md-4'>
                  <span>
                    <i className='fa fa-spoon'></i>
                  </span>{' '}
                  <h3>Cakes</h3>
                </div>
                <div className='col-md-4'>
                  <span>
                    <i className='fa fa-spoon'></i>
                  </span>{' '}
                  <h3>Cookies</h3>
                </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <span>
              <i className='fa fa-spoon'></i>
            </span>{' '}
            <h3>Pies</h3>
          </div>
          <div className='col-md-4'>
            <span>
              <i className='fa fa-spoon'></i>
            </span>{' '}
            <h3>Pastries</h3>
          </div>
          <div className='col-md-4'>
            <span>
              <i className='fa fa-spoon'></i> 
            </span>{' '}
            <h3>And More!</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
}
