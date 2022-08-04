import React from 'react';
import './styles.css'
import dany from '../../assets/Danistry.png'

import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

function Footer() {

  return (
    <div className='Footer'>
      <div className='twiter'><FaTwitter />
        <a href='https://twitter.com/Dan_Ojeda_Dev03 ' target='_blank' >Twitter</a>
      </div>
      <div className='linkedln'><FaLinkedinIn />
        <a href='https://www.linkedin.com/in/daniel-ojeda26/ ' target='_blank' >LinkedIn</a></div>
      <div className='Github'><FaGithub />
        <a href='https://github.com/DanielOjeda25' target='_blank' >Github</a>
      </div>

      <div className='Gmail'><SiGmail />
        <CopyToClipboard text='ojedadanielalejandro333@gmail.com'>
          <a className='a' onClick={() => toast('Email Copied', {
            duration: 3000,
            position: 'bottom-right',
            style: { fontFamily: 'Poppins, sans-serif' },
            icon: '👏',
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          })}>Gmail</a>
        </CopyToClipboard>
      </div>
      <div className='datas'>
        <img src={dany} className='danyDev' />
        <h3>&copy;Daniel Alejandro Ojeda | Frontend Developer 2022</h3>
      </div>
      <Toaster />
    </div >
  )
}

export default Footer