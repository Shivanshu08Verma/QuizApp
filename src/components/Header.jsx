import React from 'react'
import '../App.css'
import Home from './Home'

export default function Header() {
  return (
   <>
    <header >
      <div className='head'>
        <div className='icon-img-box'>
        <img className='icon-img' src="/icon.svg" alt="icon" />
      </div>
      <h2 className='text-header'>Quizzer</h2>
      </div>
    </header>
    </>
  )
}
