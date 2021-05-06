import Carousel from 'react-image-carousel';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Contact } from './contact'
import { Navigation } from './navigation'
const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="/img/portfolio/01-large.jpg" onDragStart={handleDragStart} />,
  <img src="/img/portfolio/02-large.jpg" onDragStart={handleDragStart} />,
  <img src="/img/portfolio/03-large.jpg" onDragStart={handleDragStart} />,
];



export class Gallery extends React.Component{
    render(){
  return (
      <div>
          <Navigation></Navigation>
          <div id='portfolio' className='text-center'>

            <div className='container'>
              <div className='section-title'>
                <h2>Gallery</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                  dapibus leonec.
                </p>
              </div>


              <AliceCarousel mouseTracking items={items}  infinite="true" disableButtonsControls="true" keyboardNavigation="true"/>


            </div>

          </div>
          <Contact></Contact>
      </div>


  )
}
}
