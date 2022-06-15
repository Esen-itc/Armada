import React from 'react'
import './Banner.css'
import banner from '../../assets/images/banner.png'
import banner_whatsapp from '../../assets/images/whatsapp.png'
import banner_instagram from '../../assets/images/instagram.png'
import banner_facebook from '../../assets/images/facebook.png'

export default function Banner() {
  return (
    <div className='banner'>
    <div className='banner_conteiner'>
      <div className='banner_conteiner_l'>
        <h1>Наружная  реклама<br/><br/>
        в Бишкеке </h1>
        <hr/>
        <p>Произдводство наружной рекламы<br/>
        и создание проектов под ключ</p>
        <button>Оставить заявку</button>
      </div>
      <div className='banner_conteiner_r'>
        <img alt='Banner_whatsapp' src={banner_whatsapp}></img>
        <img alt='Banner_instagram' src={banner_instagram}></img>
        <img alt='Banner_facebook' src={banner_facebook}></img>
      </div>
      </div>
    </div>
  )
}
