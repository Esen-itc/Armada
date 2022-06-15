import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Sectionbenefits from '../../components/Sectionbenefits/Sectionbenefits'
import Sectionrequest from '../../components/Sectionrequest/Sectionrequest'
import './Service.css'

export default function Service() {
  return (
    <div>
      <Header/>
      <Sectionbenefits/>
      <Sectionrequest/>
      <Footer/>
    </div>
  )
} 
