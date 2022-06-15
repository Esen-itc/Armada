import React from 'react'
import './Header.css'
import armada_logo from '../../assets/images/armada_logo.png'

export default function Header() {
  return (
    <div>
    <div className='header_div1'>
      <div className='header_conteiner'>
        <p>Наша сила в вашем успехе !</p>
        <div>
          <p className='header_conteiner_div_p'>Нужна помощь? Свяжитесь с нашим экспретом</p>
          <p className='header_conteiner_div_number'>+996 (553) 993 342</p>
        </div>
      </div>
    </div>
    <div className='header_div2'>
      <div className='header_panel'>
      <img alt='Armada_logo' src={armada_logo}/>
        <ul className='header_panel_ul'>
          <li>Услуги</li>
          <li>О нас</li>
          <li>Контакты</li>
          <li>Портфолио</li>
          <li>Производство</li>
          <button>Скачать прайс</button>
        </ul>
      </div>
      </div>
    </div>
  )
}
