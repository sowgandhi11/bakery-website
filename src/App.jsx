import { useState, useEffect } from 'react'
import React from "react";
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Contact } from './components/contact'

import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export class App extends React.Component {

render(){
  return (




    <div >
      <Navigation></Navigation>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Testimonials></Testimonials>
      <Contact></Contact>

    </div>


  )
}
}

export default App
