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
                 <a href='#contact'
                   className='btn btn-custom btn-lg page-scroll'
                 >
                   Contact Now
                 </a>
               </div>


               <div className='row'>
                 <div className='portfolio-items'>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='./img/portfolio/unnamed.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-1.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-1.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-2.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-2.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-3.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-3.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-4.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-4.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-5.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-5.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-6.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-6.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-7.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-7.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-8.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-8.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-9.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-9.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-10.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-10.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-11.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-11.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-12.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-12.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-13.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-13.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-14.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-14.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-15.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-15.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-16.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >
                           <div className='hover-text'>
                             <h4>Lorem Ipsum</h4>
                           </div>
                           <img
                             src='img/portfolio/copy-16.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-17.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-17.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-18.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-18.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-19.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-19.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-20.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-20.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-21.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-21.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-22.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-22.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-23.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-23.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-24.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-24.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-25.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-25.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-26.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-26.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-27.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >


                           <img
                             src='img/portfolio/copy-27.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-28.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-28.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-29.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-29.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-30.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-30.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-31.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-31.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-32.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-32.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-33.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-33.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-34.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-34.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-35.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-35.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-36.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-36.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-37.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-37.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-38.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-38.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-39.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-39.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-40.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-40.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-41.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-41.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-42.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-42.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-43.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-43.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-44.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-44.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-45.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-45.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-46.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-46.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-47.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-47.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-48.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-48.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-49.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-49.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-50.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-50.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-51.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-51.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-52.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-52.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-53.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-53.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-54.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-54.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-55.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-55.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-56.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-56.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-57.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-57.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-58.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-58.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-59.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-59.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-60.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-60.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-61.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-61.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-62.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-62.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-63.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-63.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-64.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-64.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-65.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-65.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-66.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-66.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-67.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-67.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-68.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-68.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-69.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-69.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-70.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-70.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-71.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-71.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-72.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-72.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-73.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-73.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-74.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-74.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
                   </div>
                   <div className='col-sm-6 col-md-4 col-lg-4'>
                     <div className='portfolio-item'>
                       <div className='hover-bg'>
                         {' '}
                         <a
                           href='img/portfolio/unnamed-75.jpg'
                           title='Project Title'
                           data-lightbox-gallery='gallery1'
                         >

                           <img
                             src='img/portfolio/copy-75.jpg'
                             className='img-responsive'
                             alt='Project Title'
                           />{' '}
                         </a>{' '}
                       </div>
                     </div>
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
