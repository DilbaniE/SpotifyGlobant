import React from 'react'
import stylesD from './Header.module.css'

export default function Header() {
  return (
    <div className={stylesD.head_padre}>
      <div className={stylesD.head_hijo}>
        <img className={stylesD.img} src="https://i.pinimg.com/564x/8b/e4/53/8be4536c21d19ae868b85bf48a909eb8.jpg" alt="" />
        <h1>Spotify</h1>
      </div>
      
      <div className={stylesD.head_hijotwo}>
        <button>Registro</button>
        <button>Inicio</button>
      </div>
      
    </div>
  )
}
