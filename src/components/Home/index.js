import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
// import Logo from './Logo'
import Loader from 'react-loaders'



const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray=['u','s','h','a','n','t']
    const midArray=['D','h','o','n','d','i','b','a']
    const lastArray=['M','a','h','a','d','w','a','d']

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000)
    },[])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i ,</span>  
                <br/> 
                <span className={`${letterClass} _13`}>I </span>
                <span className={`${letterClass} _14`}> ' m</span>  
                
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={50}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={midArray}
                idx={50}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={lastArray}

                idx={50}/>
                </h1>
                <h2>Web Developer. </h2>
                <h2>Frontend Developer.</h2>
                <h2>DevOps Engineer.</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>

            </div>
            {/* <Logo/> */}
        </div>
        <Loader type='pacman'/>

   </> );
}

export default Home