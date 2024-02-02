import React from 'react'
import styleD from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styleD.container__footer}>
      <ul>
        <li>Nombre: Dilbani EB</li>
        <li>Correo: claudiaenriquez241@gmail.com</li>
        <li>Link Git: <a href="https://github.com/DilbaniE/SpotifyGlobant"> GitHub DilbaniE</a> </li>
        <li> Link: <a href="https://www.linkedin.com/in/claudia-dilbani-enriquez-botina/">Linkedin </a></li>
      </ul>
      
      <img src="https://i.pinimg.com/originals/7b/3c/0f/7b3c0f037e5102362fd6172351104b7e.jpg" alt="" />
    </div>
  )
}
