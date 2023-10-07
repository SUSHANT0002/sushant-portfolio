import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faCss3,
  faDocker,
  faGitAlt,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faJsSquare,
  faLinux,
  faPython,
  faReact,
  faWindows,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <h2>
          <p>
            I'm very ambitious developer looking for a role in the IT sector
            with the opportunity to work with the latest technologies on
            challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            my chops.
          </p>
          <p>
            I'm a team player with excellent written and communication skills.
            Passion to learn, analytical and problem-solving mindset.
          </p>
        </h2>
      </div>
      <div className='cont-for-logo'>
      <div className="stage-cube-cont1">
        <div className="cubespinner1">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#EC4D28" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#032cfc" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faBootstrap} color="#7a1ce6" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faReact} color="#28A4D9" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
      <div className="stage-cube-cont2">
        <div className="cubespinner2">
          <div className="face7">
            <FontAwesomeIcon icon={faJava} color="#EC4D28" />
          </div>
          <div className="face8">
            <FontAwesomeIcon icon={faGithub} color="black" />
          </div>
          <div className="face9">
            <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
          </div>
          <div className="face10">
            <FontAwesomeIcon icon={faLinux} color="black" />
          </div>
          <div className="face11">
            <FontAwesomeIcon icon={faWindows} color="#34bdeb" />
          </div>
          <div className="face12">
            <FontAwesomeIcon icon={faPython} color="yellow" />
          </div>
        </div>
      </div>
      </div>
    </div>
    <Loader type='pacman'/>
    </>
  
  )
}

export default About
