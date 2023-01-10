/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Headersocials = () => {
  return (
    <div className='header--socials'>
        <a href="https://linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://instagram.com" target='_blank' rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default Headersocials