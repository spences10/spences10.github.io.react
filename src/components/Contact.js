import React from 'react'
import { FaEnvelope, FaTwitter, FaGithub, FaMedium, FaFire, FaCodepen } from 'react-icons/lib/fa'

class Contact extends React.Component {

  render() {
    return (
      <div id="contact" className="contact">
        <h1>Contact</h1>
        <ul className="social">
          <ul>
            <li><FaEnvelope /></li>
            <li><FaTwitter /></li>
            <li><FaGithub /></li>
            <li><FaMedium /></li>
            <li><FaFire /></li>
            <li><FaCodepen /></li>
          </ul>
        </ul>
      </div>
    )
  }
}

export default Contact
