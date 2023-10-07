import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_foje3yo',
        'template-uyjafix',
        refForm.current,
        'Kd5w4Dzz2BjCtXRkP'
      )
      .then(
        () => {
          alert('Message successfully sent;')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message,please try again.')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hey again, I'm interested in freelance opportunities - especially in
            larger projects.
          </p>
          <p>Please give a feedback. So, I can get better.</p>
          <p>
            {' '}
            However, if you have any other request or question, don't hesitate
            to contact me.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input name="name" type="text" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    required
                  />
                </li>
                <li>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Sushant Mahadwad,
          <br />
          Pune,Maharashtra,India.
          <br />
          <span>sushant.mahadwad@gmail.com</span>
          <br />
        </div>
        <div className="map-wrap">
          <MapContainer center={[18.61197273542332, 73.72118194064451]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[18.61197273542332, 73.72118194064451]}>
              <Popup>Sushant lives here , want to join for a coffee ::</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
