import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react'
export class Navigation extends React.Component{
    render(){
  return (
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>

          <div className='container'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <a className='navbar-brand page-scroll' >
                <Link target={"_blank"} to='/'>
                  <img src="img/logo.jpg" alt="TT's Logo" height="100px" width="100px"/>
                </Link>
              </a>
              <img src="img/white.jpeg"  height="120px" width="100px"/>
              </div>
              <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav navbar-right'>

                  <li>
                    <Link to='/gallery'>
                      Gallery
                    </Link>
                  </li>
              


                </ul>
              </div>
            </div>
            </nav>

  )
}
}
